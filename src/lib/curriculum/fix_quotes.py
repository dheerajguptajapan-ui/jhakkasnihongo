import os
import re

dir_path = r'c:\Users\trajk\Desktop\jhakkas nihongo\src\lib\curriculum'

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changed = False
    
    for line in lines:
        # Match pattern: key: '... didn't ...'
        # We want to find lines where a single-quoted string contains an unescaped single quote.
        # This is tricky with regex. 
        # A simpler way: if a line has an odd number of single quotes, it's likely broken.
        
        # However, it's safer to target specific fields: meanings, readings, explanation, translation, english
        
        # Regex for single-quoted string containing a single quote
        # It looks for: ' followed by some chars, then a single quote (not escaped), then some chars, then ' end.
        # But wait, the string is ALREADY broken in the file if it's unescaped.
        
        # Example broken line: readings: ['han'ei'],
        # The line content is literally: readings: ['han'ei'],
        # This has 3 quotes.
        
        quote_count = line.count("'")
        if quote_count % 2 != 0:
            # Odd number of quotes! Let's try to fix it.
            # Usually it's like:  key: ['val'ue'],  or key: 'val'ue',
            
            # Pattern 1: readings: ['...']
            if 'readings: [' in line:
                m = re.match(r"(.*readings: \[')(.*)('\],.*)", line)
                if m:
                    # m.group(2) contains something like: han'ei
                    new_line = f"{m.group(1).replace(\"'\", '\"')}{m.group(2)}{m.group(3).replace(\"'\", '\"')}\n"
                    new_lines.append(new_line)
                    changed = True
                    continue

            # Pattern 2: meanings: ['...']
            if 'meanings: [' in line:
                # Find the content between [' and ']
                start_idx = line.find("['") + 2
                end_idx = line.rfind("']")
                if start_idx > 1 and end_idx > start_idx:
                    content = line[start_idx:end_idx]
                    prefix = line[:start_idx-2]
                    suffix = line[end_idx+2:]
                    # Use double quotes for the array elements
                    new_line = f"{prefix}[\"{content}\"]{suffix}"
                    new_lines.append(new_line)
                    changed = True
                    continue

            # Pattern 3: translation: '...' or english: '...' or explanation: '...'
            for field in ['translation', 'english', 'explanation', 'character', 'meaning']:
                if f"{field}: '" in line:
                    start_idx = line.find(f"{field}: '") + len(field) + 3
                    end_idx = line.rfind("'")
                    if start_idx > field.__len__() + 2 and end_idx >= start_idx:
                        content = line[start_idx:end_idx]
                        prefix = line[:start_idx-1]
                        suffix = line[end_idx+1:]
                        # Replace surrounding quotes with double quotes
                        new_line = f"{prefix}\"{content}\"{suffix}"
                        new_lines.append(new_line)
                        changed = True
                        break
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Fixed {file_path}")

for filename in os.listdir(dir_path):
    if filename.endswith(".ts"):
        fix_file(os.path.join(dir_path, filename))
