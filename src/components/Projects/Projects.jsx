import React, { useContext, useState } from "react";
// import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
// import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
	const { theme } = useContext(ThemeContext);

	const [next, setNext] = useState(0);
	const [direction, setDirection] = useState(false);

	const useStyles = makeStyles(() => ({
		viewAllBtn: {
			color: theme.tertiary,
			backgroundColor: theme.primary,
			transition: "color 0.2s",
			"&:hover": {
				color: theme.secondary,
				backgroundColor: theme.primary,
			},
		},
		viewArr: {
			color: theme.tertiary,
			backgroundColor: theme.secondary70,
			width: "40px",
			height: "40px",
			padding: "0.5rem",
			fontSize: "1.05rem",
			borderRadius: "50%",
			cursor: "pointer",
			transition: "background-color 0.2s",
			"&:hover": {
				color: theme.tertiary,
				backgroundColor: theme.secondary,
			},
		},
	}));

	// const classes = useStyles();

	window.addEventListener("resize", () => {
		window.innerWidth < 993 ? setDirection(true) : setDirection(false);
	});

	const handlePrev = () => {
		if (next !== 0) {
			setNext(next - 1);
		}
	};
	const handleNext = () => {
		if (next !== 3) {
			// if you want to increase size increse this number.
			setNext(next + 1);
		}
	};

	console.log(next);

	return (
		<>
			{projectsData.length > 0 && (
				<div
					className="projects"
					id="projects"
					style={{ backgroundColor: theme.secondary }}
				>
					<div className="projects--header">
						<h1 style={{ color: theme.primary }}>Projects</h1>
					</div>
					<div className="projects--body">
						<div className="projects--bodyContainer">
							<button
								style={{
									borderRadius: "50%",
									width: "39px",
									border: "none",
									height: "39px",
									outline: "none",
									backgroundColor: "rgb(234,234,234)",
									boxShadow:
										"rgba(0, 0, 0, 0.35) 0px 5px 15px",
								}}
								onClick={handlePrev}
							>
								{direction ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										fill="currentColor"
										class="bi bi-arrow-up"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										fill="currentColor"
										class="bi bi-arrow-left"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
										/>
									</svg>
								)}
							</button>
							{projectsData
								.slice(0 + next, 3 + next)
								.map((project) => (
									<SingleProject
										theme={theme}
										key={project.id}
										id={project.id}
										name={project.projectName}
										desc={project.projectDesc}
										tags={project.tags}
										logos={project.logos}
										code={project.code}
										demo={project.demo}
										image={project.image}
									/>
								))}
							<button
								style={{
									borderRadius: "50%",
									width: "39px",
									border: "none",
									height: "39px",
									outline: "none",
									backgroundColor: "rgb(234,234,234)",
								}}
								onClick={handleNext}
							>
								{direction ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										fill="currentColor"
										class="bi bi-arrow-down"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										fill="currentColor"
										class="bi bi-arrow-right"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Projects;
