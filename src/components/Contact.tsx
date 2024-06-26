import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"
import { sendUserEmail } from "@/helpers/sendEmail"
import { useToast } from "@/components/ui/use-toast"


interface Contact {
    name: string
    email: string
    message: string
}

const Contact = () => {

    const { toast } = useToast()

    const form = useForm<Contact>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (data: Contact) => {

        if ([data.email, data.name, data.message].some(value => value.trim() === "")) return

        const emailResponse = await sendUserEmail(data.name, data.email, data.message)

        if (!emailResponse.success) {
            toast({
                title: "Error Sending Email",
                description: "Something went wrong. You can contact in linkedIn or on this email 'owaisahmadqureshi019@gmail.com'",
                variant: "destructive"
            })
            return
        }

        toast({
            title: "Email Sent Successfully",
            description: "Your email has been sent successfully.",
        })

        form.reset()
    }

    return (
        <section id="Contact" className="flex flex-col bg-blue-500 text-white min-h-[100vh] pt-[12vh]">

            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">Contact Me</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-white my-6" />

            <p className="mx-auto max-w-[80vw] text-center">Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Fill out the form below, and I'll get back to you as soon as possible.</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-16 mx-auto w-[90vw] md:w-[50vw] bg-white p-10 rounded text-gray-700">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Your Name" className="bg-gray-100 p-4" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Your Email" className="bg-gray-100 p-4" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type Your Message"
                                        className="resize-none min-h-[150px] bg-gray-100 p-4"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Submit</Button>
                </form>
            </Form>
        </section>
    )
}

export default Contact
