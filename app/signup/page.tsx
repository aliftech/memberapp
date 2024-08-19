import SignupForm from "../components/form/SignupForm";

export default function Signup() {
    return (
        <div className="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            {/* Signup Content */}
            <SignupForm />
        </div>
    )
}