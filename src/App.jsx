import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ExtendedTheme from './pages/global/css/chakraExtendTheme.jsx';
import GlobalCss from './pages/global/css/index.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/index';
import MasterSetting from './pages/mastersetting/index';
import Reports from './pages/reports/index';
import AttendanceSettings from './pages/mastersetting/attendancesetting/index.jsx';
import ConveyancePolicies from './pages/mastersetting/conveyancepolicies/index.jsx';
import ManageCompany from './pages/mastersetting/managecompany/index.jsx';
import ManageEmployee from './pages/allemployees/index.jsx';
import PayrollDetails from './pages/mastersetting/payrolldetails/index.jsx';
import TravelPolicies from './pages/mastersetting/travelpolicies/index.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/index.jsx';
import CompanyProfile from './pages/mastersetting/managecompany/companyprofile.jsx';
import BudgetList from './pages/mastersetting/managecompany/budgetlist.jsx';
import DepartmentSettings from './pages/mastersetting/managecompany/departmentsettings.jsx';
import EmployeeCode from './pages/mastersetting/managecompany/employeecode.jsx';
import GradeSetting from './pages/mastersetting/managecompany/gradeSetting.jsx';
import Designation from './pages/mastersetting/managecompany/designation.jsx';
import AddDepartment from './pages/mastersetting/managecompany/addDepartment.jsx';
import MultiStepForm from './pages/allemployees/mulistepform/index.jsx';
import AttendanceReportView from './pages/reports/attendanceReport/index.jsx';
import WeekofVariant from './pages/mastersetting/attendancesetting/weekofvariant.jsx';
import LeavePolicies from './pages/mastersetting/attendancesetting/leavepolicies.jsx';
import HolidayPolicies from './pages/mastersetting/attendancesetting/holidaypolicies.jsx';
import TrackManagement from './pages/mastersetting/attendancesetting/trackmanagement.jsx';
import AddTravelMode from './pages/mastersetting/conveyancepolicies/addtravelmode.jsx';
import AddNewType from './pages/mastersetting/travelpolicies/addnewtype.jsx';
import AddNewTravelMaster from './pages/mastersetting/travelpolicies/addnewtravelmaster.jsx';
import AddNewRegion from './pages/mastersetting/travelpolicies/addnewregion.jsx';
import EmpGenderWiseDiversityReportView from './pages/reports/employeeGenderWiseDiversityReport/index.jsx';
import EmpGenderWiseAttritionReportView from './pages/reports/employeeGenderWiseAttritionReport/index.jsx';
import EmpGradeWiseDiversityReportView from './pages/reports/employeeGradeWiseDiversityReport/index.jsx';
import EmpGroupWiseDiversityReportView from './pages/reports/employeeGroupWiseDiversityReport/index.jsx';
import EmpAgeWiseDiversityReportView from './pages/reports/employeeAgeWiseDiversityReport/index.jsx';
import EmpAgeWiseAttritionReportView from './pages/reports/employeeAgeWiseAttritionReport/index.jsx';
import MonthWiseAttritionReportView from './pages/reports/monthWiseAttritionReport/index.jsx';
import EmpJoiningDateWiseDiversityReportView from './pages/reports/employeeJoiningDateWiseDiversityReport/index.jsx';
import SalaryReportView from './pages/reports/salaryReport/index.jsx';
import DepartmentWiseSalaryReportView from './pages/reports/departmentWiseSalaryReport/index.jsx';
import OnboardingCandidate from './pages/mastersetting/onboarding/index.jsx';
import EmployeeDataList from './pages/allemployees/employeedatalist.jsx';
import ProbationEmployee from './pages/allemployees/probationemployee.jsx';
import SeparationEmployee from './pages/allemployees/separationemployee.jsx';
import ShiftManagement from './pages/shiftmanagement/index.jsx';
import ShiftAdd from './pages/shiftmanagement/shiftadd.jsx';
import ShiftList from './pages/shiftmanagement/shiftList.jsx';
import QuestionMaster from './pages/mastersetting/questionmaster.jsx/index';
import SalaryDetails from './pages/mastersetting/payrolldetails/SalaryDetails.jsx';
import BusinessLocationDatatable from './pages/mastersetting/businesslocation/businesslocationDatatable.jsx';
import AssetsHandover from './pages/mastersetting/assetshandover.jsx/index.jsx';
import NoticePeriodEmployee from './pages/allemployees/noticeperiodEmployee.jsx';
import AllEmployeeAttendanceReportView from './pages/reports/allEmployeeAttendance/index.jsx';
import EmployeeAttendancReportView from './pages/reports/employeeAttendanc/index.jsx';
import AllPayrollReportView from './pages/reports/allPayroll/index.jsx';
import PayslipList from './pages/mastersetting/payrolldetails/PayslipList.jsx';
import AssetsAdd from './pages/mastersetting/assetshandover.jsx/addAssets.jsx';
import CodeOfConduct from './pages/dashboard/template/codeOfConduct.jsx';
import Privacy from './pages/dashboard/template/privacy.jsx';
import ApprovalMechanism from './pages/mastersetting/approvalmechanism/index.jsx';
import TDSCalculator from './pages/mastersetting/tdscalculator/index.jsx';
import MyTemplate from './pages/mastersetting/mytemplate/index.jsx';
import Compofflist from './pages/reports/compofflist/index.jsx';
import RegularizatonList from './pages/reports/regularizatonlist/index.jsx';
import LeaveList from './pages/reports/leavelist/index.jsx';
import DutyRoster from './pages/mastersetting/dutyroster/index.jsx';
import Privetroute from './privetroute.jsx';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import LeaveCorrection from './pages/mastersetting/attendancesetting/leaveCorrection.jsx';

function App() {
	return (
		<>
			<Provider store={store}>
				<ChakraProvider theme={ExtendedTheme}>
					<GlobalCss />
					<Routes>
						<Route element={<Privetroute />}>
							<Route path='/' element={<Dashboard />} />
							<Route path='/privacy' element={<Privacy />} />
							<Route
								path='/code-of-conduct'
								element={<CodeOfConduct />}
							/>
							<Route
								path='/master-setting'
								element={<MasterSetting />}>
								<Route
									path='attendance-settings'
									element={<AttendanceSettings />}>
									<Route
										path='week-of-variant'
										element={<WeekofVariant />}
									/>
									<Route
										path='leave-policies'
										element={<LeavePolicies />}
									/>
									<Route
										path='leave-correction'
										element={<LeaveCorrection />}
									/>
									<Route
										path='holiday-policies'
										element={<HolidayPolicies />}
									/>
									<Route
										path='track-managment'
										element={<TrackManagement />}
									/>
								</Route>
								<Route
									path='conveyance-policies'
									element={<ConveyancePolicies />}
								/>
								<Route
									path='add-tarvel-mode'
									element={<AddTravelMode />}
								/>
								<Route
									path='manage-company'
									element={<ManageCompany />}>
									<Route
										path='company-profile'
										element={<CompanyProfile />}
									/>
									<Route
										path='employee-code'
										element={<EmployeeCode />}
									/>
									<Route
										path='department-settings'
										element={<DepartmentSettings />}
									/>
									<Route
										path='budget-list'
										element={<BudgetList />}
									/>
									<Route
										path='grade-setting'
										element={<GradeSetting />}
									/>
									<Route
										path='designation-setting'
										element={<Designation />}
									/>
								</Route>
								<Route
									path='add-department'
									element={<AddDepartment />}
								/>
								<Route
									path='add-new-type'
									element={<AddNewType />}
								/>
								<Route
									path='add-new-travel-master'
									element={<AddNewTravelMaster />}
								/>
								<Route
									path='add-new-region'
									element={<AddNewRegion />}
								/>
								<Route
									path='payroll-details'
									element={<PayrollDetails />}
								/>
								<Route
									path='salary-details/:empid'
									element={<SalaryDetails />}
								/>
								<Route
									path='payslip-details/:empid'
									element={<PayslipList />}
								/>
								<Route
									path='travel-policies'
									element={<TravelPolicies />}
								/>
								<Route
									path='question-master'
									element={<QuestionMaster />}
								/>
								<Route
									path='business-location'
									element={<BusinessLocationDatatable />}
								/>
								<Route
									path='assets-master'
									element={<AssetsHandover />}
								/>
								<Route
									path='assets-add'
									element={<AssetsAdd />}
								/>
								<Route
									path='approval-mechanism'
									element={<ApprovalMechanism />}
								/>
								<Route
									path='tds-calculator'
									element={<TDSCalculator />}
								/>
								<Route
									path='my-template'
									element={<MyTemplate />}
								/>
								<Route
									path='duty-roster'
									element={<DutyRoster />}
								/>
							</Route>
							<Route
								path='manage-employee'
								element={<ManageEmployee />}>
								<Route
									path='create-new-employee'
									element={<MultiStepForm />}
								/>
								<Route
									path='all-employee'
									element={<EmployeeDataList />}
								/>
								<Route
									path='probation-employee'
									element={<ProbationEmployee />}
								/>
								<Route
									path='separation-employee'
									element={<SeparationEmployee />}
								/>
								<Route
									path='notice-period-employee'
									element={<NoticePeriodEmployee />}
								/>
							</Route>
							<Route
								path='onboarding-candidate'
								element={<OnboardingCandidate />}
							/>
							<Route path='/reports' element={<Reports />}>
								<Route
									path='monthly-attendance-report'
									element={<AttendanceReportView />}
								/>
								<Route
									path='employee-attendance'
									element={<EmployeeAttendancReportView />}
								/>
								<Route
									path='all-employee-attendance'
									element={
										<AllEmployeeAttendanceReportView />
									}
								/>
								<Route
									path='monthly-salary-report'
									element={<SalaryReportView />}
								/>
								<Route
									path='department-wise-salary-report'
									element={<DepartmentWiseSalaryReportView />}
								/>
								<Route
									path='all-employee-payroll'
									element={<AllPayrollReportView />}
								/>
								{/* <Route path="company-wise-salary-report" element={<CompanyWiseSalaryReportView />} /> */}
								<Route
									path='employee-designation-wise-diversity-report'
									element={
										<EmpGroupWiseDiversityReportView />
									}
								/>
								<Route
									path='employee-grade-wise-diversity-report'
									element={
										<EmpGradeWiseDiversityReportView />
									}
								/>
								<Route
									path='employee-gender-wise-diversity-report'
									element={
										<EmpGenderWiseDiversityReportView />
									}
								/>
								<Route
									path='employee-age-wise-diversity-report'
									element={<EmpAgeWiseDiversityReportView />}
								/>
								<Route
									path='employee-joining-date-wise-diversity-report'
									element={
										<EmpJoiningDateWiseDiversityReportView />
									}
								/>
								<Route
									path='employee-age-wise-attrition-report'
									element={<EmpAgeWiseAttritionReportView />}
								/>
								<Route
									path='employee-gender-wise-attrition-report'
									element={
										<EmpGenderWiseAttritionReportView />
									}
								/>
								<Route
									path='month-wise-attrition-report'
									element={<MonthWiseAttritionReportView />}
								/>
								<Route
									path='compoff-list'
									element={<Compofflist />}
								/>
								<Route
									path='regularizaton-list'
									element={<RegularizatonList />}
								/>
								<Route
									path='leave-list'
									element={<LeaveList />}
								/>
							</Route>
							<Route path='/profile' element={<Profile />} />
							<Route
								path='/shift-management'
								element={<ShiftManagement />}>
								<Route
									path='add-shift-management'
									element={<ShiftAdd />}
								/>
								<Route
									path='shift-list'
									element={<ShiftList />}
								/>
							</Route>
							<Route path='*' element={<Dashboard />} />
						</Route>
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<Login />} />
					</Routes>
				</ChakraProvider>
			</Provider>
		</>
	);
}

export default App;
