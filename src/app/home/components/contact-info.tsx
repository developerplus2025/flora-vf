import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const items = [
  {
    id: 1,
    svg: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <g clipPath="url(#clip0_872_3147)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_872_3147">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    link: "https://github.com/developerplus2025",
  },
  {
    id: 2,
    svg: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://github.com/developerplus2025",
  },
  {
    id: 3,
    svg: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          color="currentColor"
          fill="currentColor"
          d="M3.47 1.95A19 19 0 0 1 8 7.62c.73-1.5 2.7-4.3 4.53-5.67C13.86.95 16 .19 16 2.63c0 .5-.28 4.1-.44 4.7-.58 2.03-2.66 2.55-4.5 2.24 3.23.55 4.05 2.38 2.27 4.2-3.37 3.46-4.85-.87-5.23-1.98q-.1-.32-.1-.22 0-.1-.1.22c-.38 1.11-1.86 5.44-5.23 1.98-1.78-1.82-.96-3.65 2.28-4.2C3.1 9.89 1 9.37.45 7.32A48 48 0 0 1 0 2.63C0 .2 2.15.96 3.47 1.95"
        />
      </svg>
    ),
    link: "https://github.com/developerplus2025",
  },
  {
    id: 4,
    svg: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://github.com/developerplus2025",
  },
];
export default function ContactInfo() {
  return (
    <Card className="rounded-none rounded-br-lg rounded-tr-lg">
      <CardHeader>
        <CardTitle>Other Ways to Connect</CardTitle>
        <CardDescription>
          Reach out through your preferred channel
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z"
                fill="currentColor"
              />
            </svg>

            <div>
              <h3 className="font-medium">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                For general inquiries:{" "}
                <a
                  href="mailto:info@musicasoftware.com"
                  className="text-primary hover:underline"
                >
                  info@musicasoftware.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                For support:{" "}
                <a
                  href="mailto:support@musicasoftware.com"
                  className="text-primary hover:underline"
                >
                  support@musicasoftware.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M5.5 1H2.87785C1.63626 1 0.694688 2.11946 0.907423 3.34268L1.14841 4.72836C1.96878 9.4455 5.51475 13.2235 10.1705 14.3409L12.5333 14.908C13.7909 15.2098 15 14.2566 15 12.9632V10.5L11.75 8.25L9.25 10.75L5.25 6.75L7.75 4.25L5.5 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div>
              <h3 className="font-medium">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                Customer Service:{" "}
                <a
                  href="tel:+18005551234"
                  className="text-primary hover:underline"
                >
                  +1 (800) 555-1234
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9am - 5pm EST
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5253 10.2634L8 13.8578L4.47471 10.2634C2.50843 8.25857 2.50843 4.99627 4.47471 2.99144C6.42507 1.00285 9.57493 1.00285 11.5253 2.99144C13.4916 4.99627 13.4916 8.25857 11.5253 10.2634ZM12.5962 11.3137L9.05051 14.9289L8 16L6.94949 14.9289L3.40381 11.3137C0.865397 8.72554 0.865399 4.52929 3.40381 1.94113C5.94222 -0.647042 10.0578 -0.647042 12.5962 1.94113C15.1346 4.52929 15.1346 8.72554 12.5962 11.3137ZM9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5ZM8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z"
                fill="currentColor"
              />
            </svg>

            <div>
              <h3 className="font-medium">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                123 Music Avenue
                <br />
                Suite 456
                <br />
                Nashville, TN 37203
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="h-full border-t pt-4">
          <h3 className="mb-3 font-medium">Follow Us</h3>
          <div className="flex gap-4">
            <div className="flex h-full flex-col items-start justify-between gap-2">
              {" "}
              {items.map((items) => (
                <div key={items.id} className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://facebook.com/musicasoftware"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {items.svg}
                      <span className="sr-only">Github</span>
                    </a>
                  </Button>
                  <div>
                    <p className="cursor-pointer text-sm text-[#a1a1a1] hover:text-white hover:underline">
                      {items.link}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
