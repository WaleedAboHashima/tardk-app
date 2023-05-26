import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Auth/Login"
import RegisterReducer from "./Auth/Register"
import AddPackageReducer from "./Packages/AddPackage"
import AddDeliveryReducer from "./Drivers/AddDriver"
import PayTaxesReducer from "./Payment/PayTaxes"
import RulesReducer from "./rules"
import MessagesReducer from "./User/GetMessage"
import TermsReducer from "./Admin/ChangeTerms"
import ConditionsReducer from "./Admin/Conditions"
import CommisionReducer from "./Admin/Commision"
import GetPackagesReducer from "./Packages/GetAll"
import GetDriversReducer from "./Drivers/GetAllDrivers"
import ChangeLogoReducer from "./Admin/ChangeLogo"
import ChangeIconReducer from "./Admin/ChangeIcon"
import PayPalSecretReducer from "./Admin/AddPaypal"
import PaypalActiveReducer from "./Admin/ActivatePaypal"
import ConfirmPaymentRedcuer from "./Payment/ConfirmPayment"
import SearchReducer from "./Search"
export const store = configureStore({
    reducer: {
        Login: LoginReducer,
        Register: RegisterReducer,
        AddPackage: AddPackageReducer,
        GetPackages: GetPackagesReducer,
        PayTaxes: PayTaxesReducer,
        Rules: RulesReducer,
        Messages: MessagesReducer,
        AddDelivery: AddDeliveryReducer,
        GetDriver: GetDriversReducer,
        //Admin
        Terms: TermsReducer,
        Conditions: ConditionsReducer,
        Commision: CommisionReducer,
        ChangeLogo: ChangeLogoReducer,
        ChangeIcon: ChangeIconReducer,
        PayPalSecret: PayPalSecretReducer,
        PaypalActive: PaypalActiveReducer,
        ConfirmPayment: ConfirmPaymentRedcuer,
        Search: SearchReducer,

    }
})