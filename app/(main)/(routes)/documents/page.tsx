"use client"

import Image from "next/image";

import { toast } from "sonner";

import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api"

const DocumentsPage = () => {
  const { user } = useUser();

  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" })

    toast.promise(promise, {
      loading: "Creating a New Note...",
      success: "New Note Created",
      error: "Failed to Create a New Note",
    })
  }
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Edotion
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default DocumentsPage
