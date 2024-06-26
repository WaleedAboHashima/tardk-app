import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import rules, { RulesHandler } from "./../../apis/rules";

function Footer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Rules);
  const [termsOfUse, setTermsOfUse] = useState();
  const [conditions, setConditions] = useState();
  const [icon, setIcon] = useState();
  const [whatsApp, setWhatsapp] = useState();
  const [facebook, setFacebook] = useState();
  const [insta, setInsta] = useState();

  const handleClick = (phoneNumber) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`whatsapp://send?phone=${phoneNumber}`);
    } else {
      window.open(`tel:${phoneNumber}`);
    }
  };

  useEffect(() => {
    dispatch(RulesHandler()).then((res) => {
      if (res.payload.data) {
        const termsOfUse = res.payload.data.rules.filter(
          (rule) => rule.type === "uses"
        );
        const condition = res.payload.data.rules.filter(
          (rule) => rule.type === "privacy"
        );
        const icon = res.payload.data.rules.filter(
          (rule) => rule.type === "main_img"
        );
        const whatsapp = res.payload.data.rules.filter(
          (rule) => rule.type === "whatsapp"
        );
        const facebook = res.payload.data.rules.filter(
          (rule) => rule.type === "facebook"
        );
        const insta = res.payload.data.rules.filter(
          (rule) => rule.type === "instagram"
        );
        setTermsOfUse(termsOfUse[0].textBody);
        setConditions(condition[0].textBody);
        setIcon(icon[0].main_img);
        setWhatsapp(whatsapp[0].whatsapp);
        setFacebook(facebook[0].facebook);
        setInsta(insta[0].instagram);
      }
    });
  }, [dispatch]);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: { xs: "auto", lg: "100%" },
        direction: "rtl",
        textAlign: { xs: "center", lg: "unset" },
      }}
    >
      <Box p={3} display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h6">
          سياسة الاستخدام:
          <Box height={"100px"}>
            <Typography sx={{ wordWrap: "break-word" }}>
              {state.data.rules ? termsOfUse : "سياسة الاستخدام"}
            </Typography>
          </Box>
        </Typography>
        <Typography variant="h6">
          سياسة الخصوصية:
          <Box height={"100px"} textOverflow={"ellipsis"}>
            <Typography sx={{ wordWrap: "break-word" }}>
              {state.data.rules ? conditions : "سياسة الخصوصية"}
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box
        p={3}
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        gap={{ xs: 2, lg: 15 }}
        justifyContent={{ xs: "center", lg: "space-between" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          p={1}
        >
          <Typography variant="h6" fontWeight={"bold"} py={2}>
            تواصل معنا عبر
          </Typography>
          <Box display={"flex"} gap={1} justifyContent={"center"}>
            <a href={`https://wa.me/${whatsApp}`}>
              <img
                style={{ cursor: "pointer", width: "40px", height: "40px" }}
                src="/assets/whatsAppLogo.png"
                alt="companylogos"
              />
            </a>
            <a href={facebook} target="_blank">
              <img
                style={{ cursor: "pointer", width: "40px", height: "40px" }}
                src={"/assets/facebookLogo.png"}
                alt="companylogos"
              />
            </a>
            <a href={insta} target="_blank">
              <img
                style={{ cursor: "pointer", width: "40px", height: "40px" }}
                src="/assets/instaLogo.png"
                alt="companylogos"
              />
            </a>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          p={1}
        >
          <Typography variant="h6" fontWeight={"bold"} py={2}>
            روابط سريعة
          </Typography>
          <Box
            display={"flex"}
            gap={1}
            flexDirection={"column"}
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            <Link
              onClick={() => (window.location.pathname = "/allDrivers")}
              sx={{ color: "black", cursor: "pointer" }}
              underline="none"
            >
              جميع السائقين
            </Link>
            <Link
              onClick={() => (window.location.pathname = "/allPackages")}
              sx={{ color: "black", cursor: "pointer" }}
              underline="none"
            >
              جميع الطرود
            </Link>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          p={1}
        >
          <Typography variant="h6" fontWeight={"bold"} py={2}>
            وسائل الدفع المتاحة
          </Typography>
          <Box
            display={"flex"}
            gap={3}
            justifyContent={"center"}
            height={"26px"}
          >
            <img
              onClick={() => handleClick(whatsApp)}
              height={"26px"}
              src="/assets/PayPal.png"
              alt="companylogos"
            />

            <img
              height={"30px"}
              src="/assets/Master Card.png"
              alt="companylogos"
            />
            <img height={"26px"} src="/assets/Visa.png" alt="companylogos" />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <img
            width="400px"
            height="200px"
            src={`${icon ? icon : "/assets/TARDK.png"} `}
            alt="Tardk"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
