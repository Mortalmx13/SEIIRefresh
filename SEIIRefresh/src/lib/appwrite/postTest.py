from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

user = {
    'email': 'changj20@students.ecu.edu',
    'password': 'drinktest',
}

# Setup WebDriver using ChromeDriverManager
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

print("Browser launched successfully.")

try:
    driver.get('http://localhost:5173/')
    print("Navigated to the website.")

    driver.find_element(By.ID, ":r0:-form-item").send_keys(user['email'])
    print("Email entered: ", user['email'])
    time.sleep(3)

    driver.find_element(By.ID, ":r1:-form-item").send_keys(user['password'] + Keys.ENTER)
    print("Password entered and submitted.")
    time.sleep(3)

    post = driver.find_element(By.PARTIAL_LINK_TEXT, "Create Post")
    post.click()
    print("Navigated to Create Post.")

    WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.NAME, "location")))
    print("Waiting for page to load.")

    driver.find_element(By.NAME, "location").send_keys("Test Drink")
    print("Location entered: Test Drink")
    time.sleep(2)

    driver.find_element(By.NAME, "caption").send_keys("This is a test to place Ingredients")
    print("Caption entered.")
    time.sleep(2)

    # Notify user to manually input the file
    print("Please manually select the file to upload now. You have 60 seconds.")
    time.sleep(60)  # Adjust the time as needed for manual operation

    # Continue with the rest of the script
    driver.find_element(By.NAME, "tags").send_keys("Drink, Test" + Keys.ENTER)
    print("Tags entered: Drink, Test")

    time.sleep(10)
finally:
    driver.quit()
    print("Browser closed.")
