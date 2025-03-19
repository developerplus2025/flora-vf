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

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Ways to Connect</CardTitle>
        <CardDescription>
          Reach out through your preferred channel
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-primary" />
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

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-primary" />
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

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-primary" />
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

        <div className="border-t pt-4">
          <h3 className="mb-3 font-medium">Follow Us</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://facebook.com/musicasoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://twitter.com/musicasoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://instagram.com/musicasoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://youtube.com/musicasoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
