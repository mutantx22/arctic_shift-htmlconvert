import sys
import os
from typing import Iterable
from fileStreams import getFileJsonStream
from utils import FileProgressLog
from datetime import datetime

fileOrFolderPath = os.getcwd()
recursive = False

def convertJsonToHtml(row: dict) -> str:
    """
    Convert a JSON object to a simple HTML representation.
    You can adjust this function to suit your HTML structure.
    """
    author = row["author"]
    subreddit = row["subreddit"]
    id = row["id"]
    created = row["created_utc"]
    score = row["score"]

    
    # Handle body content for posts and comments
    body = row.get("selftext") if "selftext" in row else row.get("body", "No body content available.")
	
	# Handle body content for Title
    title = row.get("title")
	
	# Combine permalink content with reddit.com
    full_url = "https://www.reddit.com" + row.get("permalink", "")
	
	# convert unix time to local
    local_time = datetime.fromtimestamp(created)  # converts to local time
    time_conversion = local_time.strftime("%Y-%m-%d %H:%M:%S")  # or your preferred format
    
    # Create HTML content for each row (can be customized)
    html_content = f"""
    <div class="post">
        <h2> <a href="{full_url}">{title if title else full_url}</a> </h2>
		<p><strong>Post ID:</strong> {id}</p>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Subreddit:</strong> {subreddit}</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Created:</strong> {time_conversion}</p>
        <div><strong>Body:</strong><p style="font-size:18px; color:#2a5d84;">{body}</p></div>
    </div>
    """
    return html_content

def processFile(path: str):
    print(f"Processing file {path}")
    with open(path, "rb") as f:
        jsonStream = getFileJsonStream(path, f)
        if jsonStream is None:
            print(f"Skipping unknown file {path}")
            return
        progressLog = FileProgressLog(path, f)
        
        # Read all rows and store them in a list for sorting
        rows = list(jsonStream)
        
        # Sort rows by 'created_utc' in descending order (newest first)
        rows.sort(key=lambda x: x["created_utc"], reverse=True)
        
        # Prepare HTML header for the file
        html_output = """
        <html>
        <head>
            <title>JSONL to HTML</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .post { border: 1px solid #ddd; margin-bottom: 10px; padding: 10px; }
                h2 { margin: 0; color: #333; }
                p { margin: 5px 0; }
            </style>
        </head>
        <body>
        <h1>Converted JSONL Data</h1>
        """
        
        for row in rows:
            progressLog.onRow()
            # Convert each row to HTML
            html_output += convertJsonToHtml(row)
        
        # Closing HTML tags
        html_output += """
        </body>
        </html>
        """
        
        # Write HTML to a file
        html_file_path = f"{os.path.splitext(path)[0]}.html"
        with open(html_file_path, "w", encoding="utf-8") as html_file:
            html_file.write(html_output)
        
        progressLog.logProgress("\n")
        print(f"HTML file saved to {html_file_path}")

def processFolder(path: str):
    fileIterator: Iterable[str]
    if recursive:
        def recursiveFileIterator():
            for root, dirs, files in os.walk(path):
                for file in files:
                    yield os.path.join(root, file)
        fileIterator = recursiveFileIterator()
    else:
        fileIterator = os.listdir(path)
        fileIterator = (os.path.join(path, file) for file in fileIterator)
    
    for i, file in enumerate(fileIterator):
        print(f"Processing file {i+1: 3} {file}")
        processFile(file)

def main():
    if os.path.isdir(fileOrFolderPath):
        processFolder(fileOrFolderPath)
    else:
        processFile(fileOrFolderPath)
    
    print("Done :>")

if __name__ == "__main__":
    main()
