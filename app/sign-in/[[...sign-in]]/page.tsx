import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-neutral-950 flex items-center justify-center">
            <SignIn
                withSignUp={true}
                signUpUrl=""
                fallbackRedirectUrl="/dashboard"
                signUpFallbackRedirectUrl="/dashboard"
                signUpForceRedirectUrl="/dashboard"
                appearance={{
                    variables: {
                        colorPrimary: '#ffffff',
                        colorBackground: '#000000',
                        colorForeground: '#ffffff',
                        colorInput: 'rgba(255, 255, 255, 0.05)',
                        colorInputForeground: '#ffffff',
                        colorMutedForeground: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '0.75rem',
                        fontFamily: "'Google Sans', sans-serif",
                        fontFamilyButtons: "'Google Sans', sans-serif",
                    },
                    elements: {
                        rootBox: 'w-full',
                        card: 'bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl',
                        headerTitle: "text-white font-['Monument_Extended'] text-base sm:text-lg text-center",
                        headerSubtitle: "text-white/50 font-['Google_Sans'] text-xs sm:text-sm text-center",
                        socialButtonsBlockButton: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/20 rounded-xl',
                        socialButtonsBlockButtonText: "text-white/80 font-['Google_Sans']",
                        formButtonPrimary: 'bg-white/90 text-black hover:bg-white rounded-xl normal-case shadow-none',
                        formFieldInput: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl focus:border-white/30 focus:bg-white/10 placeholder:text-white/40',
                        formFieldLabel: "text-white/70 font-['Google_Sans']",
                        footerActionLink: "text-white/80 hover:text-white font-['Google_Sans'] underline underline-offset-2",
                        footerActionText: "text-white/50 font-['Google_Sans']",
                        identityPreviewText: "text-white/80 font-['Google_Sans']",
                        identityPreviewEditButton: "text-white/70 hover:text-white font-['Google_Sans']",
                        formFieldInputShowPasswordButton: 'text-white/50 hover:text-white/80',
                        otpCodeFieldInput: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl focus:border-white/30',
                        dividerLine: 'bg-white/10',
                        dividerText: "text-white/40 font-['Google_Sans']",
                        formFieldSuccessText: "text-green-400 font-['Google_Sans']",
                        formFieldErrorText: "text-red-400 font-['Google_Sans']",
                        formFieldHintText: "text-white/40 font-['Google_Sans']",
                        formResendCodeLink: "text-white/70 hover:text-white font-['Google_Sans'] underline underline-offset-2",
                        footer: 'hidden',
                    },
                    options: {
                        socialButtonsPlacement: 'bottom',
                        socialButtonsVariant: 'blockButton',
                    },
                }}
            />
        </main>
    );
}
