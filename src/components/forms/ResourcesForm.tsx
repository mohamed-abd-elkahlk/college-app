"use client";
import { useRouter } from "next/navigation";

import { useEdgeStore } from "@/context/EdgeStoreProvider";
import { useToast } from "../ui/use-toast";
import { FileState, MultiFileDropzone } from "./MultiFileDropzone";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
const ResourcesForm = ({ resources, action }: any) => {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [decs, setDecs] = useState("");
  const [title, setTitle] = useState("");
  const [attachments, setattchments] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const { edgestore } = useEdgeStore();

  async function handeleSumbmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const req = await fetch("/api/new/resources", {
        method: "POST",
        body: JSON.stringify({ title, decs, attachments }),
      });
      const res = await req.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // console.log({ attachments });
  }
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }
  return (
    <div className="grid place-items-center">
      <form
        onSubmit={handeleSumbmit}
        className="grid place-items-center gap-12 "
      >
        <div className="flex flex-col w-full">
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            value={title}
            placeholder="Tilte"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="decs">Decription</label>
          <Textarea
            value={decs}
            placeholder="Tilte"
            onChange={(e) => setDecs(e.target.value)}
          />
        </div>

        <MultiFileDropzone
          value={fileStates}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            let file: string[] = [];
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    options: {
                      temporary: true,
                    },
                    file: addedFileState.file,
                    onProgressChange: async (progress: any) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        updateFileProgress(addedFileState.key, "COMPLETE");
                      }
                    },
                  });
                  file.push(res.url);
                  setattchments(file);
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              })
            );
          }}
        />
        <Button type="submit" disabled={loading}>
          {action}
        </Button>
      </form>
    </div>
  );
};

export default ResourcesForm;
