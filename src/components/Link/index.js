import NextLink from "next/link";

export default function Link({ type, href, children, ...props }) {
    if (type === "link" || !type) {
        return (
            <NextLink href={href} legacyBehavior>
                <a {...props}>{children}</a>
            </NextLink>
        );
    } else if (type === "button") {
        return (
            <NextLink href={href} legacyBehavior>
                <a {...props}>{children}</a>
            </NextLink>
        );
    }
}
