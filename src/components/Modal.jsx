import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function PatentServicesModal({ Name }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} color="blue" className="bg-[#00df9a] text-black px-[40px] py-[15px] rounded-lg w-[100%] duration-500 my-8 hover:bg-black hover:text-white">
        {Name}
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader className="text-lg font-bold text-[#235951]">
          Patent Services
        </DialogHeader>
        <DialogBody className="overflow-y-auto max-h-[70vh]">
          <div className="space-y-4 text-sm text-gray-700">
            <p className="text-lg font-semibold">Our patent services include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Knock out Patentability Search</li>
              <li>Infringement Search / Clearance / Freedom to Operate Search</li>
              <li>Validity Search / Invalidity Search</li>
              <li>Infringement or Non-Infringement Search</li>
              <li>State of the Art Search</li>
              <li>Technology Landscape Studies</li>
              <li>Patent Watch Search</li>
              <li>Patent Prosecution</li>
              <li>Patent Drafting</li>
              <li>Complete Patent Specification Drafting</li>
              <li>Provisional Patent Specification Drafting</li>
              <li>Patent Filing and Proceedings</li>
              <li>Filing Patent Applications in Indian Patent Office</li>
              <li>Filing Ordinary Patent Applications in Indian Patent Office</li>
              <li>Filing Convention Patent Applications in Indian Patent Office</li>
              <li>Filing National Phase Patent Applications in Indian Patent Office</li>
              <li>Filing PCT Applications and Patent Applications in Patent Offices Outside India</li>
              <li>Renewal of Indian Patents</li>
              <li>Filing Statement Relating to Working of Patent</li>
              <li>Pre Grant Opposition</li>
              <li>Post Grant Opposition</li>
              <li>Patent Illustration</li>
              <li>Patent Proof Reading</li>
              <li>Patent Watch</li>
              <li>Patent Monitoring</li>
              <li>Patent Valuation</li>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-4"
          >
            Close
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={handleOpen}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
