Node download https://nodejs.org/en/download

After installing the above link open cmd (press windows key and type cmd and hit enter)
Type in `cd "<path to this project>"` but replace <path to this directory> with the path to this project
The first time you run this, you need to run `npm i`
Run the project by `npm start "<path to the files to be renamed>"`
Running this program will change files to yyyy-mm-dd-rest_of_file_name, but only if it can find the date in the files names
example: some_named_photo_Fri\_\_Aug_11\_\_1920\_.jpg > 1920-08-11-The_Daily_News_Leader_Fri\_\_Aug_11\_\_1920\_.jpg
