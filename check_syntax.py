
def check_balance(filename):
    with open(filename, 'r') as f:
        content = f.read()

    stack = []
    lines = content.split('\n')
    
    # Simple tokenizer for string literals and comments not implemented effectively here
    # but for a quick check, let's just count braces ignoring strings for a moment?
    # No, strings are important because they can contain braces.
    
    # Let's count properly.
    in_string = False
    string_char = ''
    in_template = False
    in_comment = False
    
    # This is getting complex to write a full parser.
    # Let's verify via node execution.
    import subprocess
    try:
        subprocess.check_output(['node', '-c', filename], stderr=subprocess.STDOUT)
        print("Syntax OK")
    except subprocess.CalledProcessError as e:
        print("Syntax Error Found:")
        print(e.output.decode())
    except FileNotFoundError:
        print("Node.js not found, falling back to basic check")
        # Basic bracket counting (imperfect but helpful)
        open_braces = content.count('{')
        close_braces = content.count('}')
        print(f"{{: {open_braces}, }}: {close_braces}")
        
        open_parens = content.count('(')
        close_parens = content.count(')')
        print(f"(: {open_parens}, ): {close_parens}")

if __name__ == "__main__":
    check_balance("src/main.js")
