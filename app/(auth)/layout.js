export const metadata = {
  title: "Auth",
  description: "Auth",
};

export default function AuthLayout({ children }) {
  return (
    <div className={"h-screen w-full flex justify-center items-center"}>
      {children}
    </div>
  );
}
