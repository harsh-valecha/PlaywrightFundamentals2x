import { test, expect } from '@playwright/test';


test('verify make appointment button click leads to login', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let makeappointmentbtn = page.locator("#btn-make-appointment");
    await makeappointmentbtn.click();

    // check for the link 
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/profile.php#login');

});

test('verify login functionality', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let makeappointmentbtn = page.locator("#btn-make-appointment");
    await makeappointmentbtn.click();

    let username = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let loginBtn = page.locator('#btn-login');

    await username.fill('John Doe');
    await password.fill('ThisIsNotAPassword');
    await loginBtn.click();
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');

});

test('verify book appointment', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let makeappointmentbtn = page.locator("#btn-make-appointment");
    await makeappointmentbtn.click();

    let username = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let loginBtn = page.locator('#btn-login');

    await username.fill('John Doe');
    await password.fill('ThisIsNotAPassword');
    await loginBtn.click();

    // appintment page

    let facility = page.getByRole("combobox", { name: "Facility" });
    await facility.selectOption("Hongkong CURA Healthcare Center");
    let apply_to_hospital_medication = page.getByText("Apply for hospital readmission");
    await apply_to_hospital_medication.check();
    await page.getByRole("radio", { name: "Medicaid" }).click();

    let date = page.getByRole("textbox", { name: 'Visit Date (Required)' });
    await date.click();
    await date.fill('12/01/1999');
    await date.press('Enter');
    await page.locator('//textarea[@id="txt_comment"]').fill("Testing ho rhi hai!!");

    await page.getByText("Book Appointment").click();

    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/appointment.php#summary');

});