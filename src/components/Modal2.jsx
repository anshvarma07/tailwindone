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
          Trademark Services
        </DialogHeader>
        <DialogBody className="overflow-y-auto max-h-[70vh]">
          <div className="space-y-4 text-sm text-gray-700">
            <p className="text-lg font-semibold">Our Trademark services include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Trademark Search</li>
              <li>Trademark Filing & Registration</li>
              <li>Trademark Renewal</li>
              <li>Trademark Watch</li>
              <li>Industrial Design filing and prosecution</li>
              <li>Copyrights filing and prosecution</li>
              <li>IP Valuation and Market Research </li>
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
