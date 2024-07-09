import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="p-4 grid grid-cols-4 gap-4 ">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>
      <Button variant={"secondary"} size={"rounded"}>
        Start
      </Button>
      <Button variant={"secondaryOutline"} size={"rounded"}>
        Start
      </Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger Outline</Button>
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super Outline</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar Outline</Button>
    </div>
  );
};

export default Buttons;
