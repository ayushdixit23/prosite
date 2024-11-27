import React from 'react'

const Template2 = ({
	dispatch,
	switcher,
	setComponent, setChange,
	change, font1, link1,
	background_color,
	redirection,
	link2,
	bgimage, Linkes, setComponents, setReduxActive,
	setText1, color1, textcolor, active,
	header1, font2, color2, font3, Name, Button1,
	header2, setText, buttoncss, trigger, setTrigger, showbutton
}) => {
	return (
		<>
			{switcher === true ? (
				<div
					onClick={() => {
						// setComponent(3);
						dispatch(setComponent(3));
						setChange(1);
					}}
					style={{

						backgroundColor: background_color || "transparent",
						backgroundImage: background_color
							? null
							: bgimage,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						height: "100%",
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						onClick={() => {
							// setComponent(3);
							dispatch(setComponent(3));
							setChange(1);
						}}
						style={{
							backgroundImage: bgimage ? `url(${bgimage})` : null,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundColor: background_color || "transparent",
							height: "95%",
							width: "97%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

						}}
					>
						<div
							style={{
								width: "60%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center"
							}}
						>
							<link rel="stylesheet" href={font1 ? link1 : Linkes} />
							<div
								// ref={h1}
								id="h1"
								onClick={(e) => {
									e.stopPropagation();
									// setComponent(2);
									dispatch(setTrigger(true))
									sessionStorage.setItem("defaultopen", true)
									dispatch(setComponent(2));
									setComponents(false);
									const h1 = document.getElementById("h1");
									setText(h1.innerText);
									dispatch(setReduxActive("h1"));
									// setActive("h1");
									setText1(true);
								}}
								style={{
									fontFamily: font1 ? font1 : Name,
									// fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
									color: color1 ? color1 : textcolor,
								}}
								className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${active === "h1" ? "" : ""
									}`}
							>
								{header1}
							</div>
							<link rel="stylesheet" href={font2 ? link2 : Linkes} />
							<div
								id="h2"
								onClick={(e) => {
									e.stopPropagation();
									dispatch(setTrigger(true))

									dispatch(setReduxActive("h2"));
									// setComponent(2);
									dispatch(setComponent(2));
									setComponents(false);
									const h2 = document.getElementById("h2");
									setText(h2.innerText);
									// setActive("h2");

									setText1(true);
								}}
								style={{
									// fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
									fontFamily: font2 ? font2 : Name,
									color: color2 ? color2 : textcolor,
								}}
								className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${active === "h2" ? "" : ""
									}`}
							>
								{header2}
							</div>
							{showbutton && <div
								onClick={() => dispatch(setReduxActive("h3"))}
								className="w-[100%] flex justify-center"
							>
								<a href={redirection} target="_blank">
									<link rel="stylesheet" href={Linkes} />
									<div
										onClick={(e) => {
											e.stopPropagation();
											dispatch(setTrigger(true))
											sessionStorage.setItem("defaultopen", true)
											// setComponent(3);
											dispatch(setComponent(3));
											// setActive("h3")
											dispatch(setReduxActive("h3"));
											setChange(2);
										}}
										style={{
											...buttoncss,
											// backgroundColor: buttoncolor,
											// color: textcolor,
											// fontFamily: Name,
										}}
										className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${active === "h3" ? "" : ""
											}`}
									>
										{showbutton && <div
											style={{
												fontFamily: font3 ? font3 : Name,
											}}
										>
											{Button1}
										</div>}
									</div>
								</a>
							</div>}
						</div>
					</div>

				</div>
			) : (
				<div
					style={{
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundColor: background_color || "transparent",
						height: "100%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						onClick={() => {
							// setComponent(3);
							dispatch(setComponent(3));
							setChange(1);
						}}
						style={{
							backgroundImage: bgimage ? `url(${bgimage})` : null,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundColor: background_color || "transparent",
							height: "96%",
							width: "96%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							style={{
								width: "90%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center"
							}}
						>
							<link rel="stylesheet" href={font1 ? link1 : Linkes} />
							<div
								// ref={h1}
								id="h1"
								onClick={(e) => {
									e.stopPropagation();
									// setComponent(2);
									dispatch(setTrigger(true))
									sessionStorage.setItem("defaultopen", true)
									dispatch(setComponent(2));
									setComponents(false);
									const h1 = document.getElementById("h1");
									setText(h1.innerText);
									dispatch(setReduxActive("h1"));
									// setActive("h1");
									setText1(true);
								}}
								style={{
									fontFamily: font1 ? font1 : Name,
									color: color1 ? color1 : textcolor,
									fontSize: "24px",
									maxWidth: "100%",
									fontWeight: "bold",
								}}
								className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${active === "h1" ? "" : ""
									}`}
							>
								{header1}
							</div>
							<link rel="stylesheet" href={font2 ? link2 : Linkes} />
							<div
								id="h2"
								onClick={(e) => {
									e.stopPropagation();
									dispatch(setReduxActive("h2"));
									dispatch(setTrigger(true))
									sessionStorage.setItem("defaultopen", true)
									// setComponent(2);
									dispatch(setComponent(2));
									setComponents(false);
									const h2 = document.getElementById("h2");
									setText(h2.innerText);
									// setActive("h2");

									setText1(true);
								}}
								style={{
									// fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
									fontFamily: font2 ? font2 : Name,
									color: color2 ? color2 : textcolor,
									fontSize: "14px",
									height: "auto",
									fontWeight: "bold",
									width: "100%",
									marginTop: "2%",
								}}
								className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${active === "h2" ? "" : ""
									}`}
							>
								{header2}
							</div>
							{showbutton && <div
								onClick={() => dispatch(setReduxActive("h3"))}
								style={{ width: "100%", display: "flex", justifyContent: "center" }}
							>
								<a href={redirection} target="_blank">
									<link rel="stylesheet" href={Linkes} />
									<div
										onClick={(e) => {
											e.stopPropagation();
											// setComponent(3);
											dispatch(setTrigger(true))
											sessionStorage.setItem("defaultopen", true)
											dispatch(setComponent(3));
											// setActive("h3")
											dispatch(setReduxActive("h3"));
											setChange(2);
										}}
										style={{
											...buttoncss,
											// backgroundColor: buttoncolor,
											// color: textcolor,
											// fontFamily: Name,
										}}
									>
										<div
											style={{
												fontFamily: font3 ? font3 : Name,
											}}
										>
											{Button1}
										</div>
									</div>
								</a>
							</div>}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Template2