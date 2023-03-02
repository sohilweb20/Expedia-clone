// import React, { useState, useEffect } from "react";
// import Box from "@material-ui/core/Box";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// import Modal from "@material-ui/core/Modal";

// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
// import CloseIcon from "@material-ui/icons/Close";
// import AttachFileIcon from "@material-ui/icons/AttachFile";
// import SendIcon from "@material-ui/icons/Send";
// import TextField from "@material-ui/core/TextField";
// import styles from "./HelpBot.module.css";


// const useStyles = makeStyles(() => ({
//   paper: {
//     position: "absolute",
//     width: "400px",
//     maxHeight:"650px",
//     right: "2rem",
//     bottom: "0",
//     borderRadius:'3px',
//     height: "600px",
//   },

//   bot: {
//     position: "absolute",
//     boxShadow: "3px 3px 3px",
//     cursor:"pointer",
//     height: "10px",
//     width: "70px",
//     padding: "1rem",
//     bottom: "30px",
//       right: "2rem",
//     display: 'flex',
//       alignItems:"center",
//       background: '#fff',
//       borderRadius:"30px"
    
//     },
//     option: {
//         display: 'inline-block',
//         borderRadius: '10px',
//         padding: '0.5rem',
//       margin: '5px 15px',
//       width: "150px",
//       height: "19px",
//       border: "1px solid rgb(1,127,143)",
//       cursor: "pointer"
//     },
//     header: {
//         backgroundColor: 'rgb(0,177,255)',
//       display: "flex",
//         height: "23px",
//         justifyContent: "space-between",
//       padding: '1rem',
//                   borderRadius:"3px"
//     },
//     question: {
//         backgroundColor: 'rgb(230,230,230)',
//       margin: '1rem',
//       padding: "8px",
//       width: "70%",
//       borderRadius:"5px"
//     }
// }));

// const HelpBot = () => {
//   const [isModal, setIsModal] = useState(false);
//   const [help, setHelp] = useState(false);
//   const classes = useStyles();
//   useEffect(() => {
//     setTimeout(() => {
//       setHelp(true);
//     }, 1700);
//   }, []);

//   return (
//     <>
//       {help ? (
//         <Box >
//           <Box className={classes.bot} onClick={() => setIsModal(!isModal)}>
//             <QuestionAnswerIcon />
//             <div className={styles.help_div} >Help</div>
//           </Box>

//           <Modal open={isModal} onClose={() => setIsModal(!isModal)}>
//             <Paper className={classes.paper}>
//               <Box>
//                 <Box className={classes.header}>
//                   <div className={styles.wid_style}>
//                     <p className={styles.chat_style} >Chat with Virtual Agent</p>
//                   </div>
//                   <CloseIcon onClick={() => setIsModal(!isModal)} />
//                 </Box>
//                 <Box>
//                   <Box>
//                     <p className={classes.question}>
//                       Hi, I'm your Virtual Travel Agent. 👋 I'm a bot who can
//                       help you change your booking, redeem airline credit, and
//                       more.
//                     </p>
//                     <p className={classes.question}>
//                       What would you like to do?
//                     </p>
//                   </Box>
//                 </Box>
//                 <p className={styles.mar_style} ></p>
//                 <Box>
//                   <Box className={classes.option}>
//                     <p className={styles.p_option_style} >Cancel Booking</p>
//                   </Box>
//                   <Box className={classes.option}>
//                     <p className={styles.p_option_style} >Change booking</p>
//                   </Box>
//                   <Box className={classes.option}>
//                     <p className={styles.p_option_style} >Check refund status</p>
//                   </Box>
//                   <Box className={classes.option}>
//                     <p className={styles.p_option_style} >Use Airline Creding</p>
//                   </Box>
//                   <Box className={classes.option}>
//                     <p className={styles.p_option_style} >Do something else</p>
//                   </Box>
//                 </Box>
//                 <Box
//                   display="flex"
//                   justifyContent="space-around"
//                   alignItems="center"
//                   marginTop="35px"
//                 >
//                   <Box>
//                     <AttachFileIcon />
//                   </Box>
//                   <Box>
//                     <TextField label="Your Message..." variant="outlined" />
//                   </Box>
//                   <Box>
//                     <SendIcon />
//                   </Box>
//                 </Box>
//               </Box>
//             </Paper>
//           </Modal>
//         </Box>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default HelpBot;
