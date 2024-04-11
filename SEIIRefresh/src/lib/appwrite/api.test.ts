import { createPost } from './api'; // Replace 'yourCreatePostModule' with the actual path to your createPost module
import { uploadFile, getFilePreview, deleteFile } from './otherModules'; // Import necessary functions/types from other modules
import { INewPost } from './types'; // Assuming INewPost is a type/interface defined in a 'types' file

jest.mock('./otherModules', () => ({
    uploadFile: jest.fn(),
    getFilePreview: jest.fn(),
    deleteFile: jest.fn(),
}));

describe('createPost function', () => {
    const mockPost: INewPost = {
        file: [{ name: 'mockFile.txt', type: 'text/plain' }], // Mocking a file object for testing
        // Add other properties of INewPost as needed for testing
    };

    afterEach(() => {
        jest.clearAllMocks(); // Clear all mock function calls after each test
    });

    it('should create a post successfully', async () => {
        (uploadFile as jest.Mock).mockResolvedValue({ $id: 'mockFileId' }); // Mock uploadFile to resolve with a file object
        (getFilePreview as jest.Mock).mockReturnValue('mockFileUrl'); // Mock getFilePreview to return a file URL

        await createPost(mockPost);

        expect(uploadFile).toHaveBeenCalledWith(mockPost.file[0]);
        expect(getFilePreview).toHaveBeenCalledWith('mockFileId');
        expect(deleteFile).not.toHaveBeenCalled(); // Ensure deleteFile is not called
    });

    it('should handle error when file upload fails', async () => {
        const mockError = new Error('File upload failed');
        (uploadFile as jest.Mock).mockRejectedValue(mockError); // Mock uploadFile to reject with an error

        await expect(createPost(mockPost)).rejects.toThrow(mockError);

        expect(getFilePreview).not.toHaveBeenCalled(); // Ensure getFilePreview is not called
        expect(deleteFile).not.toHaveBeenCalled(); // Ensure deleteFile is not called
    });

    it('should handle error when file URL retrieval fails', async () => {
        (uploadFile as jest.Mock).mockResolvedValue({ $id: 'mockFileId' }); // Mock uploadFile to resolve with a file object
        (getFilePreview as jest.Mock).mockReturnValue(undefined); // Mock getFilePreview to return undefined

        await expect(createPost(mockPost)).rejects.toThrow();

        expect(uploadFile).toHaveBeenCalledWith(mockPost.file[0]);
        expect(getFilePreview).toHaveBeenCalledWith('mockFileId');
        expect(deleteFile).toHaveBeenCalledWith('mockFileId'); // Ensure deleteFile is called with the correct fileId
    });
});
