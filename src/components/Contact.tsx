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


interface Contact {
    name: string
    email: string
    message: string
}

const Contact = () => {

    const form = useForm<Contact>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = (data: Contact) => {
        form.reset()
    }

    return (
        <section id="Contact" className="flex flex-col bg-blue-500 text-white min-h-[100vh]">

            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">Contact Me</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-white my-6" />

            <p className="mx-auto max-w-[80vw] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse, magni dolore expedita quos doloribus quisquam culpa. Ducimus, assumenda. Possimus cum explicabo ut blanditiis ipsam? Veniam fugiat optio tenetur.</p>

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
