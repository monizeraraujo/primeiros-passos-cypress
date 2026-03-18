import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";
import MyInfoPage from "../pages/myInfoPage.js";

const Chance = require("chance");

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it("User Info Update - Success!", () => {
    loginPage.accessLoginPage();

    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password,
    );

    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();

    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.last(),
      chance.string(),
    );
    myInfoPage.fillEmployeeDetails(
      chance.string({ numeric: true, length: 5 }),
      chance.string({ numeric: true, length: 8 }),
      chance.string({ numeric: true, length: 7 }),
      "2026-03-13",
    );
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });
});
