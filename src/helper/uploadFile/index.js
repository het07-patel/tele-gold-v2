
import { uid } from "uid";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";
import { storage } from "@/firebase";

export const uploadFile = async (folder, files) => {
    try {
        const filesArray = Array.from(files);
        if (folder && filesArray?.length) {
            const uploadPromises = filesArray.map(async (item) => {
                const parts = item?.name?.split(".");
                const ext = parts?.[parts?.length - 1];
                const filename = Date.now() + uid() + "." + ext;
                const path = `${folder}/${filename}`;
                return await uploadToFireStore(item, path);
            });
            const urls = await Promise.all(uploadPromises);
            return urls;
        } else {
            console.log("folder name and files required");
        }
    } catch (e) {
        console.log(e?.message);
    }
};


export const deleteFile = (folder, url) => {
    return new Promise((resolve, reject) => {
        if (url) {
            const parts = url?.split("?")[0].split("/");
            const filename = parts[parts.length - 1];
            const imagePath = `${folder}/${filename.split("%2F").pop()}`;
            // Create a reference to the file to delete
            const deleteRef = ref(storage, imagePath);

            // Delete the file
            deleteObject(deleteRef)
                .then(() => {
                    resolve(true);
                })
                .catch((err) => {
                    reject(err);
                });
        } else {
            reject(new Error("folder name and url required"));
        }
    });
};

export const uploadToFireStore = (file, path) => {
    return new Promise((resolve, reject) => {
        const imageRef = ref(storage, path);
        uploadBytes(imageRef, file)
            .then((uploadResult) => {
                const url = getDownloadURL(ref(storage, uploadResult.ref.fullPath));
                resolve(url);
            })
            .catch((err) => {
                reject(err);
            });
    });
};