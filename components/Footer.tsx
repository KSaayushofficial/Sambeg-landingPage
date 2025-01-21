import React from 'react';
import { Button } from './ui/button';

function Footer() {
  return (
    <footer className="border-t bg-muted/50 text-neutral-50">
        <div className="container py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Fiction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Non-Fiction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Children's Books
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Newsletter</h4>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AudioBook Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer