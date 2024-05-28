import { resend } from "@/lib/resend"
import sendEmail from "../../emails/VerificationEmail"

export async function sendUserEmail(
    name: string,
    email: string,
    message: string
): Promise<{
    success: boolean,
    message: string
}> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "owaisahmadqureshi019@gmail.com",
            subject: 'Messenger | Verification Code',
            react: sendEmail({ name, email, message }),
        })

        return {
            success: true,
            message: "Email send successfully."
        }
    } catch (emailError) {
        console.error("Error sending email", emailError)

        return {
            success: false,
            message: "Failed to send email."
        }
    }
}