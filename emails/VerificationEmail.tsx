import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
} from "@react-email/components";

interface EmailProps {
    name: string
    email: string
    message: string
}

export default function sendEmail({
    name,
    email,
    message
}: EmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>{name}</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KMFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Message from portfolio. {email}.</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Name: {name}</Heading>
                </Row>
                <Row>
                    <Text>
                        {message}
                    </Text>
                </Row>
            </Section>
            <body></body>
        </Html>
    );
}
