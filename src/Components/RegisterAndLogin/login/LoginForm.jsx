import {
	Button,
	Divider,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import style from "./LoginPage.module.css";
import {useDispatch} from "react-redux"
import { loginAPI } from "../storeLogin/actionsLogin";

const LoginForm = () => {
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const [loginCreds, setLoginCreds] = useState({
		username: "",
		password: "",
	});

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLoginCreds({ ...loginCreds, [name]: value });
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		dispatch(loginAPI(loginCreds))
		console.log(loginCreds);
	};

	return (
		<div>
			<Heading size="md">Login</Heading>

			<form action="submit" onSubmit={handleLoginSubmit}>
				<FormControl className={style.formLogin} isRequired>
					<div>
						<FormLabel fontSize="sm" htmlFor="email">
							Email ID / Username
						</FormLabel>
						<Input
							value={loginCreds.username}
							onChange={handleLoginChange}
							type="email"
							name="username"
							placeholder="Enter Email ID / Username"
						/>
					</div>

					<div>
						<FormLabel fontSize="sm" htmlFor="password">
							Password
						</FormLabel>
						<InputGroup size="md">
							<Input
								pr="4.5rem"
								type={show ? "text" : "password"}
								placeholder="Enter password"
								name="password"
								value={loginCreds.password}
								onChange={handleLoginChange}
							/>
							<InputRightElement width="4.5rem">
								<Button
									bg="white"
									color="blue"
									h="1.75rem"
									size="sm"
									onClick={handleClick}
								>
									{show ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
						<FormHelperText color="blue" cursor="pointer" ml="200px">
							Forgot password?
						</FormHelperText>
					</div>

					<div>
						<Button colorScheme="blue" my="5" w="300px" type="submit">
							Login
						</Button>
					</div>

					<div>
						<Button colorScheme="blue" variant="link" size="sm">
							Use OTP to login
						</Button>
					</div>

					<div>
						<Divider />
						<div className={style.GoogleDividerORLogin}>OR</div>
						<Button
							leftIcon={<FcGoogle />}
							colorScheme="blue"
							variant="outline"
							borderRadius="20px"
						>
							Sign in with Google
						</Button>
					</div>
				</FormControl>
			</form>
		</div>
	);
};

export default LoginForm;
