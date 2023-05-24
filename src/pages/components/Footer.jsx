import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import rules, { RulesHandler } from './../../apis/rules';

function Footer() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Rules)
  const [termsOfUse, setTermsOfUse] = useState();
  const [conditions, setConditions] = useState();
  const [icon, setIcon] = useState();
  useEffect(() => {
    dispatch(RulesHandler()).then((res) => {
      if (res.payload.data) {
        const termsOfUse = res.payload.data.rules.filter(rule => rule.type === "uses")
        const condition = res.payload.data.rules.filter(rule => rule.type === "privacy")
        const icon = res.payload.data.rules.filter(rule => rule.type === "main_img")
        setTermsOfUse(termsOfUse[0].textBody)
        setConditions(condition[0].textBody)
        setIcon(icon[0].main_img)
      }
    })
  }, [dispatch])
    return (
    <Box width="100%" display={'flex'} flexDirection={'column'} height="512px" sx={{ direction: "rtl" }}>
      <Box p={3} display={'flex'} flexDirection={'column'} gap={2}>
          <Typography variant="h6">
            سياسه الاستخدام: 
          <Box>{state.data.rules ? termsOfUse : "سياسه الاستخدام"}</Box>
        </Typography>
        <Typography variant="h6">
        سياسه الخصوصيه: 
            <Box>{state.data.rules ? conditions : "سياسه الخصوصيه"}</Box>
        </Typography>
          </Box>
          <Box p={3} display={'flex'} gap={15} justifyContent={'space-between'}>
              <Box width={'150px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>تواصل معنا عبر</Typography>
                  <Box display={'flex'} gap={1} justifyContent={'center'}>
                      <img style={{cursor: 'pointer'}} onClick={() => ''} src="/assets/whatsAppLogo.png" alt="companylogos" />
                        <img style={{ cursor: 'pointer' }} onClick={() => ''} src={"/assets/facebookLogo.png"} alt="companylogos" />
                      <img style={{cursor: 'pointer'}} onClick={() => ''} src="/assets/instaLogo.png"  alt="companylogos"/>
                  </Box>
              </Box>
              <Box width={'300px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>روابط سريعة</Typography>
                  <Box display={'flex'} gap={1} width={{lg: '100px', xl: 'auto'}} justifyContent={'center'} flexDirection={'column'}>
                      <Link sx={{color: 'black', cursor: 'pointer'}} underline="none">جميع السائقين</Link>
                      <Link sx={{color: 'black', cursor: 'pointer'}} underline="none">جميع الطرود</Link>
                  </Box>
              </Box>
              <Box width={'300px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>وسائل الدفع المتاحة</Typography>
                  <Box display={'flex'} gap={3} justifyContent={'center'} height={'26px'}>
                      <img height={'26px'} src="/assets/PayPal.png"  alt="companylogos"/>
                      <img height={'30px'} src="/assets/Master Card.png" alt="companylogos" />
                      <img height={'26px'} src="/assets/Visa.png" alt="companylogos" />
                  </Box>
              </Box>
              <Box width={'auto'} height={'200px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img width={'418px'} height={'133px'} src={`${icon ? `https://tardq.onrender.com/${icon}` : 'TARDK.png'} `}  alt="Tardk"/>
              </Box>
          </Box>
    </Box>
  );
}

export default Footer;
