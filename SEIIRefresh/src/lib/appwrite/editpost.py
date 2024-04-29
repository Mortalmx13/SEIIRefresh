from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import requests
import time

user = {
    'email': 'youngch20@students.ecu.edu',
    'password': 'bill1234',
    
}

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)
try:
    driver.get('http://localhost:5173/')
    print("Navigated to the website.")

    driver.find_element(By.ID, ":r0:-form-item").send_keys(user['email'])
    print("Email entered: ", user['email'])
    time.sleep(3)

    driver.find_element(By.ID, ":r1:-form-item").send_keys(user['password'] + Keys.ENTER)
    print("Password entered and submitted.")
    time.sleep(3)


    home_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/"][aria-current="page"]')
    home_link.click()
    print("Clicked on the Home link.")
    time.sleep(3)
    
    editPost = driver.find_element(By.CSS_SELECTOR, 'a[href="/update-post/662eebf7a74c94a613f4"]')
    editPost.click()
    time.sleep(10)
    print("Clicked on the edit post button")

    driver.find_element(By.NAME, "location").send_keys("Whipped Lemonade -TEST")
    print("added Whipped Lemonade to the name")
    time.sleep(10)

    update_post_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Update Post') and contains(@class, 'bg-primary')]")
    update_post_button.click()
    print("Clicked on the update post button")
    time.sleep(10)
finally:
    driver.quit()
    print("browser closed")
