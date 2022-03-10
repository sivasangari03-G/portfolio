import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import emailjs from "emailjs-com";

import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";

function Contacts() {
	const [open, setOpen] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const { theme } = useContext(ThemeContext);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const useStyles = makeStyles((t) => ({
		input: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: "var(--primaryFont)",
			fontWeight: 500,
			transition: "border 0.2s ease-in-out",
			"&:focus": {
				border: `4px solid ${theme.primary600}`,
			},
		},
		message: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: "var(--primaryFont)",
			fontWeight: 500,
			transition: "border 0.2s ease-in-out",
			"&:focus": {
				border: `4px solid ${theme.primary600}`,
			},
		},
		label: {
			backgroundColor: `${theme.secondary}`,
			color: `${theme.primary}`,
			fontFamily: "var(--primaryFont)",
			fontWeight: 600,
			fontSize: "0.9rem",
			padding: "0 5px",
			transform: "translate(25px,50%)",
			display: "inline-flex",
		},
		socialIcon: {
			width: "45px",
			height: "45px",
			borderRadius: "50%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "21px",
			backgroundColor: theme.primary,
			color: theme.secondary,
			transition: "250ms ease-in-out",
			"&:hover": {
				transform: "scale(1.1)",
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
		detailsIcon: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			borderRadius: "50%",
			width: "45px",
			height: "45px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "23px",
			transition: "250ms ease-in-out",
			flexShrink: 0,
			"&:hover": {
				transform: "scale(1.1)",
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
		submitBtn: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			transition: "250ms ease-in-out",
			"&:hover": {
				transform: "scale(1.08)",
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
	}));

	const classes = useStyles();



	return (
		<div
			className="contacts"
			id="contacts"
			style={{ backgroundColor: theme.secondary }}
		>
			<div className="contacts--container">
				<h1 style={{ color: theme.primary }}>Contacts</h1>
				<div className="contacts-body">
					<div className="contacts-details">
						<a
							href={`mailto:${contactsData.email}`}
							className="personal-details"
						>
							<div className={classes.detailsIcon}>
								<FiAtSign />
							</div>
							<p style={{ color: theme.tertiary }}>
								{contactsData.email}
							</p>
						</a>
						<a
							href={`tel:${contactsData.phone}`}
							className="personal-details"
						>
							<div className={classes.detailsIcon}>
								<FiPhone />
							</div>
							<p style={{ color: theme.tertiary }}>
								{contactsData.phone}
							</p>
						</a>
						<a
							href={socialsData.github}
							className="personal-details"
						>
							<div className={classes.detailsIcon}>
								<FaGithub />
							</div>
							<p style={{ color: theme.tertiary }}>
								{contactsData.github}
							</p>
						</a>
						<a
							href={socialsData.linkedIn}
							className="personal-details"
						>
							<div className={classes.detailsIcon}>
								<FaLinkedinIn />
							</div>
							<p style={{ color: theme.tertiary }}>
								{contactsData.linkedIn}
							</p>
						</a>
					
						<div className="personal-details">
							<div className={classes.detailsIcon}>
								<HiOutlineLocationMarker />
							</div>
							<p style={{ color: theme.tertiary }}>
								{contactsData.address}
							</p>
						</div>

						
					</div>
				</div>
			</div>
			<img
				src={theme.contactsimg}
				alt="contacts"
				className="contacts--img"
			/>
		</div>
	);
}

export default Contacts;
