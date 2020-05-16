import { createContext, ReactNode, ReactElement, useState } from 'react';

interface AuthContextProps {
	authenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
	authenticated: false
});

export const AuthProvider = ({ value, children }: { value: boolean; children: ReactNode }): ReactElement => {
	const [authenticated] = useState(value);

	return <AuthContext.Provider value={{ authenticated }}>{children}</AuthContext.Provider>;
};
