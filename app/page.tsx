import SigninForm from "./components/form/SigninForm";

export default function Home() {
  return (
    <div className="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
        {/* Login Content */}
          <SigninForm />
    </div>

  );
}