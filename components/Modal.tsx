"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  LoaderIcon,
  Maximise,
  PencilIcon,
  PlusIcon,
  PriorityIcon,
  ShareIcon,
  StarIcon,
  TrashIcon,
  X,
} from "@/assets/icons";
import { barlow } from "@/assets/fonts";
import { api, createTask, updateTask } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Task } from "@/app/types";

interface ModalProps {
  children: React.ReactNode;
  task?: Task
  statuss?: string;
  user: any;
  edit?: boolean;
  classX?: string;
}

const Modal: React.FC<ModalProps> = ({ children, classX, task, statuss, user, edit }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<{
    title: string | null;
    status: string;
    description: string;
    priority: string;
  }>({
    title: task?.title || "New task",
    status: statuss || "",
    description: task?.description || "",
    priority: task?.priority || "",
  });
  const [date, setDate] = useState<Date>(task?.date ? new Date(task.date) : new Date());

  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSave = async () => {
    setIsLoading(true);

    try {
      let body = {
        title: titleRef.current!.textContent || "",
        user: user,
        status: data.status,
        description: data.description,
        priority: data.priority,
        date: date!,
      };

      edit ? await updateTask(task?.id!, body) : await createTask(body);
      window.location.reload();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleBlur = () => {
      if (titleRef.current && titleRef.current.textContent !== null) {
        setData((prevData) => ({
          ...prevData,
          title: titleRef.current!.textContent,
        }));
      }
    };

    const titleElement = titleRef.current;
    titleElement?.addEventListener("blur", handleBlur);

    return () => {
      titleElement?.removeEventListener("blur", handleBlur);
    };
  }, []);
  return (
    <Sheet>
      <SheetTrigger className={classX}>{children}</SheetTrigger>

      <SheetContent className="bg-white min-w-[800px] shadow-lg p-0 ">
        <div className="w-full py-4 px-6">
          <div className="flex justify-between items-center mb-7">
            <div className="flex items-center space-x-4">
              <SheetClose>
                <X className="h-5 w-5 text-[#797979]" />
              </SheetClose>
              <Maximise className="h-5 w-5 text-[#797979]" />
            </div>
            <div className="flex items-center space-x-4">
              <SheetClose>
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-[#F4F4F4] rounded p-2 text-[#797979] flex items-center gap-2"
                >
                  <span className="text-base">
                    {isLoading ? "Saving..." : "Save"}
                  </span>
                  {isLoading && <LoaderIcon className="animate-spin h-4 w-4" />}
                </button>
              </SheetClose>
              <button className="bg-[#F4F4F4] rounded p-2 text-[#797979] flex items-center gap-2">
                <span className="text-base">Share</span>{" "}
                <ShareIcon size={16} className="ml-2" />
              </button>
              <button className="bg-[#F4F4F4] rounded p-2 text-[#797979] flex items-center gap-2">
                <span className="text-base">Favourite</span>{" "}
                <StarIcon size={16} className="ml-2" />
              </button>
            </div>
          </div>
          <h1
            ref={titleRef}
            spellCheck="false"
            contentEditable
            suppressContentEditableWarning
            className={`${barlow.className} text-5xl text-[#CCCCCC] no-underline font-semibold mb-8 outline-none`}
          >
            {data.title}
          </h1>
          <div className="space-y-6 w-1/2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <LoaderIcon className="h-5 w-5 text-[#666666]" />
                <span className="text-[#666666]">Status</span>
              </div>
              <Dialog>
                <DialogTrigger>
                  <span
                    className={`${
                      !data.status ? "text-[#C1BDBD]" : "text-black"
                    }`}
                  >
                    {data.status || "Not selected"}
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        status
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Select
                          value={data.status}
                          onValueChange={(val) =>
                            setData((data) => {
                              return { ...data, status: val };
                            })
                          }
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="To do">To do</SelectItem>
                            <SelectItem value="In progress">
                              In progress
                            </SelectItem>
                            <SelectItem value="Under review">
                              Under review
                            </SelectItem>
                            <SelectItem value="Finished">Finished</SelectItem>
                          </SelectContent>
                        </Select>
                        <TrashIcon
                          className="h-5 w-5 text-[#666666] ml-2 cursor-pointer"
                          onClick={() => {
                            setData((prev) => {
                              return { ...prev, status: "" };
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PriorityIcon className="h-5 w-5 text-[#666666]" />
                <span className="text-[#666666]">Priority</span>
              </div>
              <Dialog>
                <DialogTrigger>
                  <span
                    className={`${
                      !data.priority ? "text-[#C1BDBD]" : "text-black"
                    }`}
                  >
                    {data.priority || "Not selected"}
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        priority
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Select
                          onValueChange={(val) =>
                            setData((data) => {
                              return { ...data, priority: val };
                            })
                          }
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Low">Low</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                        <TrashIcon
                          className="h-5 w-5 text-[#666666] ml-2 cursor-pointer"
                          onClick={() => {
                            setData((prev) => {
                              return { ...prev, priority: "" };
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-[#666666]" />
                <span className="text-[#666666]">Deadline</span>
              </div>
              <Dialog>
                <DialogTrigger>
                  <span
                    className={`${!date ? "text-[#C1BDBD]" : "text-black"}`}
                  >
                    {date?.toLocaleDateString() || "Not selected"}
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        date
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              // @ts-ignore
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <TrashIcon
                          className="h-5 w-5 text-[#666666] ml-2 cursor-pointer"
                          onClick={() => {
                            setData((prev) => {
                              return { ...prev, date: "" };
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-[#666666]" />
                <span className="text-[#666666]">Description</span>
              </div>
              <Dialog>
                <DialogTrigger>
                  <span
                    className={`${
                      !data.description ? "text-[#C1BDBD]" : "text-black"
                    }`}
                  >
                    {data.description || "Not selected"}
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        description
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Input
                          value={data.description}
                          onChange={(e) =>
                            setData((data) => {
                              return { ...data, description: e.target.value };
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex mt-9 items-center space-x-2">
            <PlusIcon className="h-5 w-5 text-[#666666]" />
            <span>Add custom property</span>
          </div>
          <div className="border-t border-t-[#DEDEDE] mt-6 pt-6 text-[#C0BDBD]">
            Start writing, or drag your own files here.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Modal;
