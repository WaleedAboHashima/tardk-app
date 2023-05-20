import React from "react";
import SidePanel from "../components/SidePanel";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

function TermsOfUse() {
  return (
    <Box sx={{ direction: "rtl" }} display={"flex"}>
      <SidePanel />
      <Box
        display={"flex"}
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        <Box width={"1257px"} height={"682px"} display={"flex"}>
          <Box
            sx={{ backgroundColor: "white" }}
            p={5}
            display={"flex"}
            flexWrap={"wrap"}
            gap={5}
            width={"100%"}
            flexDirection={"column"}
          >
            <Typography
              fontFamily={`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`}
              variant="h4"
              color={"#454545"}
              fontWeight={"bold"}
            >
تغيير سياسة الاستخدام
            </Typography>
            <Formik
              onSubmit={() => console.log("done")}
              initialValues={initialState}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", gap: 2, flexDirection: "column", justifyContent: 'left' }}
                >
                  <TextField
                    name="message"
                    error={!!touched.message && !!errors.message}
                    helperText={touched.message && errors.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.message}
                    multiline
                    rows={18}
                    sx={{ width: "100%", direction: "rtl" }}
                    dir="rtl"
                    placeholder="تغيير سياسة الاستخدام"
                  />
                  <Button
                    type="submit"
                    sx={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      display: "flex",
                      gap: 2,
                      backgroundColor: "#454545",
                      ":hover": { backgroundColor: "#454545" },
                    }}
                    variant="contained"
                  >
                    <img src="/assets/checkMarkWhite.png" alt="checkmark" />
                    تطبيق التغيير
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const initialState = {
  message: "",
};

export default TermsOfUse;
