import type { Certification } from "../types";

export const linuxPlus: Certification = {
  id: "linux-plus",
  name: "CompTIA Linux+",
  shortName: "Linux+",
  vendor: "CompTIA",
  overview:
    "CompTIA Linux+ validates the skills needed to configure, monitor, and support Linux systems in enterprise environments. It covers system management, security, scripting, containers, and troubleshooting across major distributions.",
  examSummary: {
    questionCount: 90,
    durationMinutes: 90,
    passingScore: "720/900",
    format: "Multiple choice and performance-based",
  },
  domains: [
    {
      id: "linux-fundamentals",
      name: "Linux Fundamentals",
      topics: [
        {
          id: "linux-filesystem",
          name: "Linux Filesystem",
          lesson: {
            title: "Understanding the Linux Filesystem Hierarchy",
            content: `The Linux filesystem follows the Filesystem Hierarchy Standard (FHS), a consistent directory layout across distributions. Everything begins at the root directory (/), which is the top of the tree. Unlike Windows drive letters, Linux mounts all storage under this single hierarchy.

Key directories include /bin and /sbin for essential user and system binaries, /etc for configuration files, /home for user home directories, /var for variable data like logs and mail spools, /tmp for temporary files, and /usr for user programs and libraries. The /boot directory holds bootloader files and the kernel, while /dev contains device files representing hardware.

Inodes store file metadata such as permissions, ownership, timestamps, and pointers to data blocks. Hard links reference the same inode, while symbolic links (symlinks) point to another path. Mount points attach filesystems—local disks or network shares—into the directory tree at specific locations defined in /etc/fstab.

Understanding FHS helps administrators locate configs, logs, and binaries quickly regardless of whether they work on RHEL, Ubuntu, or SUSE. Commands like find, ls, and df rely on this predictable structure for daily system management tasks.

On the XK0-005 exam, expect questions on FHS paths, mount concepts, and inode behavior. Practice navigating with cd, pwd, and ls -la until directory purposes are automatic. Use find / -type f -name pattern and df -h / du -sh to locate files and measure disk usage—common performance-based tasks.

Symbolic links break if the target is removed; hard links persist until all links are deleted. Exam scenarios often ask which link type survives target deletion or what happens when you mount a filesystem at /mnt/data. Review /proc and /sys as virtual filesystems exposing kernel and process information.`,
          },
          keyFacts: [
            "/ is the root of the entire Linux filesystem hierarchy",
            "/etc stores system-wide configuration files",
            "/var/log contains log files and variable runtime data",
            "Inodes store file metadata; hard links share an inode, symlinks do not",
            "/etc/fstab defines filesystems mounted at boot",
            "/home holds individual user home directories",
          ],
          commonMistakes: [
            "Confusing /bin with /usr/bin or /sbin with /usr/sbin purposes",
            "Believing hard links work across different filesystems like symlinks can",
            "Mixing up /etc/fstab with /etc/mtab for mount configuration",
            "Forgetting symbolic links break when the target is deleted",
            "Assuming /root is the same as the filesystem root /",
          ],
          examTraps: [
            "Which directory holds configuration files—/etc vs /var vs /usr",
            "Hard link survives target deletion vs symlink becomes dangling",
            "Inode exhaustion vs disk space exhaustion symptoms",
            "/proc and /sys as virtual filesystems not stored on disk",
            "Mount point behavior when target directory already contains files",
          ],
          quiz: [
            {
              id: "linux-filesystem-q1",
              prompt: "Which directory contains system-wide configuration files on a Linux system?",
              choices: [
                { id: "a", text: "/var" },
                { id: "b", text: "/etc" },
                { id: "c", text: "/usr" },
                { id: "d", text: "/opt" },
              ],
              correctChoiceId: "b",
              explanation:
                "/etc is the standard location for system configuration files such as passwd, fstab, and service configs.",
            },
            {
              id: "linux-filesystem-q2",
              prompt: "What is the top-level directory in the Linux filesystem hierarchy?",
              choices: [
                { id: "a", text: "/root" },
                { id: "b", text: "/home" },
                { id: "c", text: "/" },
                { id: "d", text: "/boot" },
              ],
              correctChoiceId: "c",
              explanation:
                "The root directory (/) is the apex of the filesystem tree; all other directories branch from it.",
            },
            {
              id: "linux-filesystem-q3",
              prompt: "Which file defines filesystems to mount automatically at boot?",
              choices: [
                { id: "a", text: "/etc/mtab" },
                { id: "b", text: "/etc/fstab" },
                { id: "c", text: "/etc/mount.conf" },
                { id: "d", text: "/etc/filesystems" },
              ],
              correctChoiceId: "b",
              explanation:
                "/etc/fstab lists filesystems, mount points, filesystem types, and mount options for boot-time mounting.",
            },
            {
              id: "linux-filesystem-q4",
              prompt: "Where are log files typically stored on a Linux system?",
              choices: [
                { id: "a", text: "/var/log" },
                { id: "b", text: "/etc/log" },
                { id: "c", text: "/usr/log" },
                { id: "d", text: "/tmp/log" },
              ],
              correctChoiceId: "a",
              explanation:
                "/var/log is the conventional directory for system and application log files.",
            },
            {
              id: "linux-filesystem-q5",
              prompt: "What is the difference between a hard link and a symbolic link?",
              choices: [
                { id: "a", text: "Hard links point to a path; symlinks share the same inode" },
                { id: "b", text: "Hard links share the same inode; symlinks point to another path" },
                { id: "c", text: "Both always share the same inode" },
                { id: "d", text: "Symlinks can only be created by root; hard links cannot" },
              ],
              correctChoiceId: "b",
              explanation:
                "A hard link is another directory entry referencing the same inode. A symbolic link is a separate file containing a path to the target.",
            },
          ],
          flashcards: [
            {
              id: "linux-filesystem-f1",
              front: "What directory holds system configuration files?",
              back: "/etc",
            },
            {
              id: "linux-filesystem-f2",
              front: "What file defines boot-time filesystem mounts?",
              back: "/etc/fstab",
            },
            {
              id: "linux-filesystem-f3",
              front: "Where are user home directories located?",
              back: "/home",
            },
            {
              id: "linux-filesystem-f4",
              front: "Virtual filesystem exposing kernel/process info?",
              back: "/proc",
            },
            {
              id: "linux-filesystem-f5",
              front: "Command to show disk usage by filesystem?",
              back: "df -h",
            },
          ],
          objectives: ["XK0-005-1.1","XK0-005-1.2","XK0-005-1.3"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "linux-filesystem-bank-q1",
                              "prompt": "Which directory contains locally installed optional software?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/usr/local"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/opt"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/srv"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/lib"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "/opt is commonly used for third-party or optional application bundles."
                    },
                    {
                              "id": "linux-filesystem-bank-q2",
                              "prompt": "What command shows inode usage per filesystem?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ls -i only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "top"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "df -i"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "mount -i"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "df -i reports inode consumption, important when 'disk full' is actually inode exhaustion."
                    },
                    {
                              "id": "linux-filesystem-bank-q3",
                              "prompt": "Which directory holds the Linux kernel and bootloader files?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/lib/modules only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/sys"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/usr/src"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/boot"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "/boot stores the kernel image, initramfs, and bootloader configuration."
                    },
                    {
                              "id": "linux-filesystem-bank-q4",
                              "prompt": "A symlink target is deleted. What happens to the symlink?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "It becomes a dangling (broken) link"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "It automatically points to /"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "It becomes a hard link"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "The filesystem remounts read-only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Symlinks store a path string; if the target vanishes, the link breaks."
                    },
                    {
                              "id": "linux-filesystem-bank-q5",
                              "prompt": "Which file lists currently mounted filesystems?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/fstab only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/proc/mounts or findmnt"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/etc/mtab only on all distros"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/var/mounts"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "/proc/mounts reflects active mounts; findmnt provides a friendly view."
                    },
                    {
                              "id": "linux-filesystem-bank-q6",
                              "prompt": "Where are temporary files often stored?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/tmp"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/usr/tmp only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/tmp"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/root/tmp"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "/tmp holds temporary files, often cleared on reboot depending on distro policy."
                    },
                    {
                              "id": "linux-filesystem-bank-q7",
                              "prompt": "Which command creates a symbolic link?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "link -s"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ln -H"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "symlink"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ln -s target linkname"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "ln -s creates a symbolic (soft) link to the target path."
                    },
                    {
                              "id": "linux-filesystem-bank-q8",
                              "prompt": "Shared library files on 64-bit systems commonly live under:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/usr/lib64 or /lib64"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/bin/lib"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/etc/lib"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/var/lib only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "64-bit distributions place shared libraries in /lib64 and /usr/lib64."
                    }
          ],

        },
        {
          id: "command-line-basics",
          name: "Command Line Basics",
          lesson: {
            title: "Essential Linux Command Line Skills",
            content: `The Linux command line is the primary interface for system administration. Commands follow the pattern command [options] [arguments]. Options modify behavior—short flags use a single hyphen (-l) while long options use double hyphens (--long). The man command displays manual pages; man -k searches by keyword.

Navigation uses pwd to print the working directory, cd to change directories, and ls to list contents. ls -la shows hidden files and detailed permissions. File operations include cp to copy, mv to move or rename, rm to remove, and mkdir/rmdir for directories. Always use rm -i or rm -r carefully since deleted files are not sent to a recycle bin by default.

Redirection controls input and output: > overwrites a file, >> appends, < reads input from a file, and | pipes stdout to another command. Command substitution with $(command) or backticks captures output for use in scripts. Tab completion speeds typing and reduces errors.

Wildcards expand patterns: * matches any characters, ? matches one character, and [abc] matches a single character from the set. Understanding these fundamentals enables efficient daily administration and forms the foundation for scripting and automation tasks on any Linux distribution.

Exam performance items often chain commands: grep error /var/log/syslog | tail -20 or find /home -name '*.conf' -type f 2>/dev/null. Know stderr redirection (2> and 2>&1) and when to use xargs versus pipes.

History expansion (!!, !n) and alias pitfalls appear in troubleshooting scenarios—an alias masking real command behavior. Environment variables export into child processes; shell variables without export do not. Practice man -k keyword searches to locate the right command quickly under time pressure.`,
          },
          keyFacts: [
            "man displays manual pages; man -k searches manuals by keyword",
            "> redirects stdout (overwrite); >> appends; | pipes output to another command",
            "ls -la shows hidden files and detailed permission information",
            "Tab completion auto-completes commands, paths, and filenames",
            "Wildcards: * matches any string, ? matches one character",
            "rm permanently deletes files unless aliases or trash utilities intercept",
          ],
          commonMistakes: [
            "Confusing absolute paths (starting with /) with relative paths",
            "Mixing up stdout (1), stderr (2), and stdin (0) file descriptors",
            "Assuming rm -rf is recoverable without backups",
            "Forgetting that .. refers to parent directory and . refers to current",
            "Using incorrect case—Linux commands and filenames are case-sensitive",
          ],
          examTraps: [
            "Redirect stderr with 2> vs merge with 2>&1 syntax",
            "Pipe | connects stdout to stdin vs redirect > writes to file",
            "Tab completion and history vs retyping long paths",
            "which vs whereis vs locate command location questions",
            "Exit code 0 means success vs non-zero means failure",
          ],
          quiz: [
            {
              id: "command-line-basics-q1",
              prompt: "Which command displays the manual page for a given command?",
              choices: [
                { id: "a", text: "help" },
                { id: "b", text: "info" },
                { id: "c", text: "man" },
                { id: "d", text: "doc" },
              ],
              correctChoiceId: "c",
              explanation:
                "The man command opens the manual page for commands, configuration files, and system calls.",
            },
            {
              id: "command-line-basics-q2",
              prompt: "What does the pipe (|) operator do in a shell command?",
              choices: [
                { id: "a", text: "Redirects stderr to a file" },
                { id: "b", text: "Sends stdout of one command as stdin to another" },
                { id: "c", text: "Runs two commands in parallel" },
                { id: "d", text: "Appends output to a file" },
              ],
              correctChoiceId: "b",
              explanation:
                "The pipe connects stdout of the left command to stdin of the right command, enabling command chaining.",
            },
            {
              id: "command-line-basics-q3",
              prompt: "Which ls option shows hidden files (those starting with a dot)?",
              choices: [
                { id: "a", text: "ls -h" },
                { id: "b", text: "ls -R" },
                { id: "c", text: "ls -a" },
                { id: "d", text: "ls -t" },
              ],
              correctChoiceId: "c",
              explanation:
                "The -a (all) option lists hidden files along with regular files and directories.",
            },
            {
              id: "command-line-basics-q4",
              prompt: "Which redirection operator appends output to the end of a file?",
              choices: [
                { id: "a", text: ">" },
                { id: "b", text: ">>" },
                { id: "c", text: "<" },
                { id: "d", text: "2>" },
              ],
              correctChoiceId: "b",
              explanation:
                ">> appends stdout to a file without overwriting existing content, unlike > which truncates first.",
            },
            {
              id: "command-line-basics-q5",
              prompt: "What wildcard matches exactly one character in a filename pattern?",
              choices: [
                { id: "a", text: "*" },
                { id: "b", text: "?" },
                { id: "c", text: "#" },
                { id: "d", text: "~" },
              ],
              correctChoiceId: "b",
              explanation:
                "The ? wildcard matches a single character, while * matches zero or more characters.",
            },
          ],
          flashcards: [
            {
              id: "command-line-basics-f1",
              front: "What command shows the current working directory?",
              back: "pwd",
            },
            {
              id: "command-line-basics-f2",
              front: "What does >> do?",
              back: "Appends stdout to a file",
            },
            {
              id: "command-line-basics-f3",
              front: "Which ls flag shows hidden files?",
              back: "ls -a",
            },
            {
              id: "command-line-basics-f4",
              front: "Redirect stderr to a file?",
              back: "command 2> file",
            },
            {
              id: "command-line-basics-f5",
              front: "Search man pages by keyword?",
              back: "man -k keyword",
            },
          ],
          objectives: ["XK0-005-1.4","XK0-005-1.5"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "command-line-basics-bank-q1",
                              "prompt": "Which command searches file contents recursively?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "locate only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "grep -r pattern dir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "search"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "find -grep"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "grep -r searches recursively through directory trees."
                    },
                    {
                              "id": "command-line-basics-bank-q2",
                              "prompt": "What does 2>&1 accomplish in a shell command?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "Redirects stdin to stdout"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Runs command twice"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Redirects stderr to stdout"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Appends stderr only"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "2>&1 merges stderr (fd 2) into stdout (fd 1)."
                    },
                    {
                              "id": "command-line-basics-bank-q3",
                              "prompt": "Which wildcard matches exactly one character?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "*"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "?"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "#"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "~"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "? matches a single character; * matches any length string."
                    },
                    {
                              "id": "command-line-basics-bank-q4",
                              "prompt": "Command to display current working directory?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "pwd"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "cwd"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "whereami"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "dir"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "pwd prints the present working directory path."
                    },
                    {
                              "id": "command-line-basics-bank-q5",
                              "prompt": "Which creates parent directories as needed?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "mkdir only without flags"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "makedir -p"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "mkdir -p"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "touch -d"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "mkdir -p creates missing parent directories in the path."
                    },
                    {
                              "id": "command-line-basics-bank-q6",
                              "prompt": "What does Ctrl+C send to a foreground process?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "SIGINT"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "SIGKILL"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "SIGHUP"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "SIGSTOP"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Ctrl+C sends SIGINT, requesting interruption (not guaranteed kill)."
                    },
                    {
                              "id": "command-line-basics-bank-q7",
                              "prompt": "Which command counts lines, words, and bytes in a file?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "count"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "stat"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "size"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "wc"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "wc reports line, word, and byte counts."
                    },
                    {
                              "id": "command-line-basics-bank-q8",
                              "prompt": "To run a command in the background you append:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "&&"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "&"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "|"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": ";;"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Trailing & runs the command in the background."
                    }
          ],

        },
      ],
    },
    {
      id: "system-administration",
      name: "System Administration",
      topics: [
        {
          id: "users-and-groups",
          name: "Users and Groups",
          lesson: {
            title: "Managing Linux Users and Groups",
            content: `Linux is a multi-user operating system where every process runs under a user identity. User accounts are defined in /etc/passwd, which stores the username, UID, GID, home directory, and default shell. Password hashes reside in /etc/shadow, readable only by root. Groups are listed in /etc/group with members assigned for shared resource access.

The root user (UID 0) has unrestricted system privileges. Regular users receive UIDs starting at 1000 on most distributions. The useradd command creates accounts; usermod modifies them; userdel removes them. Group management uses groupadd, groupmod, and groupdel. The passwd command sets user passwords.

Supplementary groups grant additional permissions beyond the primary group. Use usermod -aG groupname username to append a user to a group without removing existing memberships. The id and groups commands display current identity and group memberships. sudo allows delegated root privileges based on /etc/sudoers configuration.

Proper user and group management enforces least privilege, isolates user data in /home directories, and controls access to files, services, and administrative commands across the system.

Linux+ scenarios frequently test /etc/passwd vs /etc/shadow vs /etc/group field meanings. Know that the second passwd field is often 'x' indicating shadow holds the hash. The nobody user (UID 65534 on many systems) and system accounts (UID < 1000) appear in hardening questions.

visudo safely edits /etc/sudoers—never edit sudoers directly with a standard editor without locking. wheel group membership often grants sudo on RHEL. chage manages password aging. Exam items may ask which file to audit after unauthorized account creation.`,
          },
          keyFacts: [
            "/etc/passwd stores user account information; /etc/shadow stores password hashes",
            "UID 0 is reserved for the root superuser account",
            "useradd creates accounts; usermod -aG adds users to supplementary groups",
            "/etc/group defines groups and their member lists",
            "sudo grants elevated privileges based on /etc/sudoers rules",
            "Primary group is set at account creation; supplementary groups extend access",
          ],
          commonMistakes: [
            "Confusing /etc/passwd (user info) with /etc/shadow (encrypted passwords)",
            "Mixing up primary group vs supplementary groups",
            "Assuming UID 0 is a regular user, not root",
            "Forgetting useradd vs adduser distribution differences",
            "Believing deleting a user always removes their home directory",
          ],
          examTraps: [
            "UID 0 always belongs to root superuser",
            "/etc/group fourth field lists group members vs /etc/passwd GID field",
            "sudo vs su privilege escalation differences",
            "System accounts (nologin shell) vs interactive user accounts",
            "userdel -r removes home directory vs userdel without -r leaves files",
          ],
          quiz: [
            {
              id: "users-and-groups-q1",
              prompt: "Which file contains password hashes on most Linux systems?",
              choices: [
                { id: "a", text: "/etc/passwd" },
                { id: "b", text: "/etc/shadow" },
                { id: "c", text: "/etc/group" },
                { id: "d", text: "/etc/gshadow" },
              ],
              correctChoiceId: "b",
              explanation:
                "/etc/shadow stores encrypted password hashes and password aging information, protected from regular users.",
            },
            {
              id: "users-and-groups-q2",
              prompt: "Which UID is assigned to the root account?",
              choices: [
                { id: "a", text: "1" },
                { id: "b", text: "100" },
                { id: "c", text: "0" },
                { id: "d", text: "65534" },
              ],
              correctChoiceId: "c",
              explanation:
                "Root always has UID 0, granting full administrative privileges on the system.",
            },
            {
              id: "users-and-groups-q3",
              prompt: "Which command safely adds a user to a supplementary group without removing other groups?",
              choices: [
                { id: "a", text: "usermod -G group user" },
                { id: "b", text: "usermod -aG group user" },
                { id: "c", text: "groupadd user group" },
                { id: "d", text: "adduser -g group user" },
              ],
              correctChoiceId: "b",
              explanation:
                "usermod -aG appends the user to the group. Using -G alone replaces the user's supplementary group list.",
            },
            {
              id: "users-and-groups-q4",
              prompt: "Where is sudo privilege configuration primarily defined?",
              choices: [
                { id: "a", text: "/etc/sudoers" },
                { id: "b", text: "/etc/passwd" },
                { id: "c", text: "/etc/security/sudo.conf" },
                { id: "d", text: "/etc/root.conf" },
              ],
              correctChoiceId: "a",
              explanation:
                "/etc/sudoers defines which users or groups may run commands with elevated privileges via sudo.",
            },
            {
              id: "users-and-groups-q5",
              prompt: "Which command creates a new user account on most Linux distributions?",
              choices: [
                { id: "a", text: "newuser" },
                { id: "b", text: "useradd" },
                { id: "c", text: "addaccount" },
                { id: "d", text: "mkuser" },
              ],
              correctChoiceId: "b",
              explanation:
                "useradd creates new user accounts. Many distributions also provide adduser as a higher-level wrapper.",
            },
          ],
          flashcards: [
            {
              id: "users-and-groups-f1",
              front: "Which file stores user account details (not passwords)?",
              back: "/etc/passwd",
            },
            {
              id: "users-and-groups-f2",
              front: "What is root's UID?",
              back: "0",
            },
            {
              id: "users-and-groups-f3",
              front: "How do you append a user to a group?",
              back: "usermod -aG groupname username",
            },
            {
              id: "users-and-groups-f4",
              front: "Safe way to edit sudoers?",
              back: "visudo",
            },
            {
              id: "users-and-groups-f5",
              front: "Command to change password aging?",
              back: "chage -l username",
            },
          ],
          objectives: ["XK0-005-1.6","XK0-005-1.7"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "users-and-groups-bank-q1",
                              "prompt": "Which file stores group password hashes (if used)?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/passwd"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/shadow"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/etc/group only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/etc/gshadow"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "/etc/gshadow stores group password hashes when group passwords are enabled."
                    },
                    {
                              "id": "users-and-groups-bank-q2",
                              "prompt": "Which command displays a user's UID, GID, and groups?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "id"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "who"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "w"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "last"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "id shows numeric and name identities for the user."
                    },
                    {
                              "id": "users-and-groups-bank-q3",
                              "prompt": "Default first regular user UID on many distros?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "0"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1000"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "500 only on all"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "65534"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Human user accounts typically start at UID 1000."
                    },
                    {
                              "id": "users-and-groups-bank-q4",
                              "prompt": "Which removes a user but keeps home directory?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "userdel -r"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "deluser --remove-all"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "userdel username (without -r)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "usermod -d"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "userdel without -r removes the account but leaves /home/username by default on many systems."
                    },
                    {
                              "id": "users-and-groups-bank-q5",
                              "prompt": "Primary group for new files is usually:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "root"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "User's primary GID"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "others"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "wheel always"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "New files inherit the creating user's primary group unless setgid applies on directories."
                    },
                    {
                              "id": "users-and-groups-bank-q6",
                              "prompt": "Which command locks a user password?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "passwd -u"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "usermod -U"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "chage -E 0 only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "passwd -l username"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "passwd -l locks the account password."
                    },
                    {
                              "id": "users-and-groups-bank-q7",
                              "prompt": "Sudo logs are often found in:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/var/log/auth.log or /var/log/secure"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/sudo.log"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/tmp/sudo"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/proc/sudo"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Authentication logs record sudo usage on Debian and RHEL systems respectively."
                    }
          ],

        },
        {
          id: "permissions",
          name: "Permissions",
          lesson: {
            title: "Linux File Permissions and Access Control",
            content: `Linux permissions control who can read, write, or execute files and directories. Each file has an owner, a group, and permissions for others. The ls -l output shows permissions as rwx for owner, group, and others—read (r), write (w), and execute (x). Directories use execute permission to allow entering and listing contents.

Numeric (octal) notation represents permissions: read=4, write=2, execute=1. chmod 755 sets rwxr-xr-x. chmod u+x adds execute for the owner; chmod g-w removes group write. chown changes ownership; chgrp changes group. Use chown user:group file to set both at once.

Special permissions extend basic rules. SetUID (4) on executables runs the program as the file owner. SetGID (2) on directories makes new files inherit the directory's group. The sticky bit (1) on directories like /tmp prevents users from deleting others' files. View special bits with ls -l—s or t in the execute position indicates their presence.

umask sets default permissions for newly created files and directories by subtracting from 666 (files) or 777 (directories). ACLs (Access Control Lists) via setfacl and getfacl provide granular permissions beyond standard owner/group/other when needed.

XK0-005 heavily tests octal math and special bits. SetUID on /usr/bin/passwd allows password changes while hashes stay root-owned in shadow. SetGID on shared project directories ensures consistent group ownership. Default umask 022 yields 644 files and 755 directories.

ACLs solve collaborative directory scenarios: setfacl -m u:bob:rw shared/ grants bob write without changing group membership. getfacl verifies effective permissions. Combine this topic with the chmod simulator drill before attempting performance-based permission tasks.`,
          },
          keyFacts: [
            "Permission bits: read=4, write=2, execute=1 in octal notation",
            "chmod changes permissions; chown changes owner; chgrp changes group",
            "SetUID runs executables as the file owner; sticky bit protects shared directories",
            "Directories require execute permission to access contents",
            "umask subtracts from default 666/777 to set new file permissions",
            "ACLs (setfacl/getfacl) allow permissions for specific users beyond owner/group/other",
          ],
          guidedExample: {
            title: "Set Secure Permissions on a Shared Project Directory",
            steps: [
              "Create directory /srv/project with group 'devteam' as group owner using chgrp.",
              "Set permissions to 2770 (rwxrws---) enabling SetGID so new files inherit devteam group.",
              "Add developers alice and bob to group devteam with usermod -aG devteam.",
              "Verify with ls -ld /srv/project that drwxrws--- appears and group is devteam.",
              "Use getfacl /srv/project if alice needs read-only access without group membership.",
              "Confirm others have no access and the sticky bit is not needed unless world-writable.",
            ],
          },
          commonMistakes: [
            "Setting chmod 777 as a quick fix instead of proper group ownership",
            "Confusing SetUID (4), SetGID (2), and sticky bit (1) octal prefixes",
            "Forgetting directories need execute permission to enter and list contents",
            "Applying chown before verifying the target user and group exist",
            "Mixing up symbolic chmod (u+x) with octal chmod (755) syntax errors",
          ],
          examTraps: [
            "SetUID on /usr/bin/passwd allows users to change passwords securely",
            "Sticky bit on /tmp prevents users deleting others' files",
            "umask 022 yields 644 files and 755 directories from defaults",
            "ACL setfacl -m u:name:rw grants user-specific access beyond owner/group/other",
            "rwx for owner=7, r-x for group=5, r-x for others=5 equals 755",
          ],
          realWorldScenario: "Three developers share /opt/webapp configs on a staging server. The manager wants consistent group ownership without world-readable secrets. You create a 'webdev' group, set the directory to 2770 with SetGID, add the developers to the group, and use ACLs to grant the auditor read-only access without write permission—then verify with ls -la and getfacl before handing off to the deployment pipeline.",
          estimatedStudyMinutes: 35,
          difficulty: "hard",
          prerequisites: ["linux-filesystem", "users-and-groups"],
          quiz: [
            {
              id: "permissions-q1",
              prompt: "What octal permission value represents rwxr-xr-x?",
              choices: [
                { id: "a", text: "644" },
                { id: "b", text: "755" },
                { id: "c", text: "777" },
                { id: "d", text: "700" },
              ],
              correctChoiceId: "b",
              explanation:
                "rwx=7, r-x=5, r-x=5 for owner, group, and others respectively, giving 755.",
            },
            {
              id: "permissions-q2",
              prompt: "Which command changes file ownership?",
              choices: [
                { id: "a", text: "chmod" },
                { id: "b", text: "chown" },
                { id: "c", text: "chgrp" },
                { id: "d", text: "umask" },
              ],
              correctChoiceId: "b",
              explanation:
                "chown changes the owner (and optionally group) of a file or directory.",
            },
            {
              id: "permissions-q3",
              prompt: "What is the purpose of the sticky bit on a directory like /tmp?",
              choices: [
                { id: "a", text: "Files run as the directory owner" },
                { id: "b", text: "Only the file owner can delete their own files in the directory" },
                { id: "c", text: "All new files inherit the directory group" },
                { id: "d", text: "The directory cannot be deleted" },
              ],
              correctChoiceId: "b",
              explanation:
                "The sticky bit (t) on a directory prevents users from removing files they do not own, even if the directory is world-writable.",
            },
            {
              id: "permissions-q4",
              prompt: "Which permission is required on a directory to cd into it?",
              choices: [
                { id: "a", text: "Read" },
                { id: "b", text: "Write" },
                { id: "c", text: "Execute" },
                { id: "d", text: "Sticky bit" },
              ],
              correctChoiceId: "c",
              explanation:
                "Execute permission on a directory allows traversing into it (cd). Read allows listing; write allows creating/deleting entries.",
            },
            {
              id: "permissions-q5",
              prompt: "What does umask control?",
              choices: [
                { id: "a", text: "Maximum file size limits" },
                { id: "b", text: "Default permissions for newly created files and directories" },
                { id: "c", text: "Sudo access levels" },
                { id: "d", text: "Password expiration policy" },
              ],
              correctChoiceId: "b",
              explanation:
                "umask defines which permission bits to remove from the default 666 (files) or 777 (directories) when creating new items.",
            },
          ],
          flashcards: [
            {
              id: "permissions-f1",
              front: "What octal value is rwxr-xr-x?",
              back: "755",
            },
            {
              id: "permissions-f2",
              front: "Which command changes file permissions?",
              back: "chmod",
            },
            {
              id: "permissions-f3",
              front: "What does the sticky bit on /tmp prevent?",
              back: "Users deleting files owned by other users",
            },
            {
              id: "permissions-f4",
              front: "Octal value for SetUID + rwxr-xr-x?",
              back: "4755",
            },
            {
              id: "permissions-f5",
              front: "Add ACL read/write for user bob on file?",
              back: "setfacl -m u:bob:rw file",
            },
          ],
          objectives: ["XK0-005-1.8","XK0-005-2.1"],
          practiceType: ["reading","quiz","flashcard","simulator","case-study"],
          questionBank: [
                    {
                              "id": "permissions-bank-q1",
                              "prompt": "What permission does chmod g+s set?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "Sticky bit"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "SetGID bit"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "SetUID bit"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Immutable flag"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "g+s sets SetGID on a file or directory."
                    },
                    {
                              "id": "permissions-bank-q2",
                              "prompt": "Default file mode with umask 027?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "777"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "755"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "640"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "750"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "666 - 027 = 640 for new files (approximate default behavior)."
                    },
                    {
                              "id": "permissions-bank-q3",
                              "prompt": "Which displays ACLs on a file?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "getfacl"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "lsacl"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "acl -l"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "faclstat"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "getfacl lists extended ACL entries."
                    },
                    {
                              "id": "permissions-bank-q4",
                              "prompt": "chmod 600 means:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "rwx------"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "rw-r-----"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "rwxr-x---"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "rw-------"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "6=rw- for owner only; group and others have no permissions."
                    },
                    {
                              "id": "permissions-bank-q5",
                              "prompt": "SUID on an executable causes it to run as:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "The invoking user always"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "The file owner"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "The group owner"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "nobody"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "SetUID executes with the owner's privileges."
                    },
                    {
                              "id": "permissions-bank-q6",
                              "prompt": "Which changes only the group owner?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "chmod"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "chown user file"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "chgrp group file"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "groupmod file"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "chgrp changes group ownership."
                    },
                    {
                              "id": "permissions-bank-q7",
                              "prompt": "Execute on a regular file means:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "May run as a program"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "May list directory"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "May rename file"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sticky protection"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Execute on files allows execution if the file is a binary or script."
                    },
                    {
                              "id": "permissions-bank-q8",
                              "prompt": "What permission does the sticky bit provide on a directory?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "Only the file owner can delete their own files in a world-writable directory"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Executables run as root"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "New files inherit the directory group"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Directory becomes read-only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "The sticky bit (e.g., on /tmp) prevents users from deleting files owned by other users in a shared directory."
                    }
          ],
          assignments: [
                    {
                              "id": "linux-chmod-drill-1",
                              "title": "Simulator: chmod & Permissions Drill",
                              "type": "simulator",
                              "instructions": "Complete the in-app chmod drill. Practice converting between rwx notation and octal values, and predict permission changes after chmod commands. Aim for 80% or higher before moving on.",
                              "estimatedMinutes": 15,
                              "simulatorId": "linux-chmod-drill",
                              "completionCriteria": [
                                        "Complete the drill session (5–10 items)",
                                        "Score at least 80%",
                                        "Review any missed weak concepts"
                              ],
                              "relatedTopicIds": [
                                        "permissions"
                              ],
                              "order": 1
                    },
                    {
                              "id": "permissions-webroot-case-1",
                              "title": "Case Study: Fix Web Root Permissions",
                              "type": "case-study",
                              "instructions": "Scenario: A web app returns 403 Forbidden after a junior admin ran chmod -R 777 /var/www/html. The nginx service account (www-data) must read files and traverse directories, but only developers in group webdev should write. Static assets must not be executable.\n\n1. Describe the security problem with 777 on the web root.\n2. Propose correct owner, group, and octal permissions for /var/www/html and typical files (644) vs directories (755).\n3. Write the chmod/chown commands to restore secure permissions.\n4. Explain whether SetGID on the directory would help the webdev group — and why.\n5. List one ACL command if a single user outside webdev needs write access.\n\nDocument your answers — a VM is optional for hands-on practice.",
                              "estimatedMinutes": 25,
                              "completionCriteria": [
                                        "Explained why 777 is insecure for a web root",
                                        "Proposed correct owner, group, and octal modes",
                                        "Wrote chmod/chown commands to fix the tree",
                                        "Explained SetGID benefit for shared group ownership",
                                        "Provided an ACL example for exceptional access"
                              ],
                              "relatedTopicIds": [
                                        "permissions"
                              ],
                              "order": 2
                    }
          ],
        },
        {
          id: "package-management",
          name: "Package Management",
          lesson: {
            title: "Linux Package Management",
            content: `Package managers install, update, and remove software while resolving dependencies automatically. Major families differ by distribution: Debian/Ubuntu use dpkg with apt (Advanced Package Tool), while RHEL/Fedora use rpm with dnf (or yum on older systems). SUSE uses zypper with rpm packages.

On Debian-based systems, apt update refreshes the package index from repositories defined in /etc/apt/sources.list and /etc/apt/sources.list.d/. apt install installs packages; apt remove uninstalls them; apt upgrade updates installed packages. dpkg -i installs local .deb files but does not resolve dependencies alone.

On RPM-based systems, dnf install fetches packages from configured repos in /etc/yum.repos.d/. rpm -qa lists installed packages; rpm -qi shows package info. Snap and Flatpak provide distribution-independent packaging with sandboxing, while AppImage bundles applications as single executable files.

Repositories may be official distribution mirrors or third-party sources. Always verify GPG keys and use trusted repositories. Package management is central to patching security vulnerabilities—regular updates keep systems protected against known exploits.

Know the difference between rpm -ivh (install local rpm), dnf install (repo resolution), and apt install. apt-cache search / dnf search find packages; apt show / dnf info display metadata. Removing config files: apt purge vs apt remove; dnf remove vs rpm -e.

Security patching workflows: apt update && apt upgrade or dnf upgrade --security on supported repos. Verify package integrity with rpm -V packagename. Third-party repos require GPG key import—exam questions warn about untrusted sources.`,
          },
          keyFacts: [
            "Debian/Ubuntu: apt and dpkg for .deb packages",
            "RHEL/Fedora: dnf/yum and rpm for .rpm packages",
            "apt update refreshes indexes; apt upgrade installs available updates",
            "rpm -qa lists installed RPM packages; dnf install resolves dependencies",
            "Repositories are configured in /etc/apt/sources.list or /etc/yum.repos.d/",
            "Snap, Flatpak, and AppImage provide cross-distribution packaging options",
          ],
          guidedExample: {
            title: "Install and Verify nginx on a RHEL System with dnf",
            steps: [
              "Update package metadata with sudo dnf check-update or dnf makecache.",
              "Search available packages: dnf search nginx.",
              "Install nginx: sudo dnf install -y nginx.",
              "Verify installation: rpm -q nginx and dnf list installed nginx.",
              "Enable and start the service: sudo systemctl enable --now nginx.",
              "Confirm the package signature and repository source with dnf info nginx.",
            ],
          },
          commonMistakes: [
            "Using apt commands on RHEL/Fedora or dnf/yum on Debian/Ubuntu",
            "Installing packages without updating repositories first on fresh systems",
            "Confusing rpm -i (direct RPM install) with dnf install (dependency resolution)",
            "Forgetting to enable EPEL or other repositories before searching for packages",
            "Mixing up remove, erase, and autoremove cleanup behaviors",
          ],
          examTraps: [
            "Debian/Ubuntu: apt update vs apt upgrade vs apt install sequence",
            "RHEL/Fedora: dnf install vs rpm -qa query installed packages",
            "zypper (SUSE) vs dnf vs apt distribution-specific commands",
            "Which command shows package dependencies before install—dnf deplist or apt-cache depends",
            "Removing configuration files: apt purge vs apt remove distinction",
          ],
          realWorldScenario: "A new Ubuntu web server needs Apache, PHP, and security updates applied weekly. You configure /etc/apt/sources.list, run apt update && apt upgrade, install apache2 with apt install, hold kernel packages if needed with apt-mark hold, and schedule unattended-upgrades—documenting equivalent dnf commands for the RHEL servers in your mixed environment.",
          estimatedStudyMinutes: 25,
          difficulty: "medium",
          prerequisites: ["command-line-basics", "system-services"],
          quiz: [
            {
              id: "package-management-q1",
              prompt: "Which command installs a package on a Debian/Ubuntu system?",
              choices: [
                { id: "a", text: "dnf install" },
                { id: "b", text: "apt install" },
                { id: "c", text: "zypper add" },
                { id: "d", text: "rpm -i" },
              ],
              correctChoiceId: "b",
              explanation:
                "apt install downloads and installs packages with dependency resolution on Debian-based distributions.",
            },
            {
              id: "package-management-q2",
              prompt: "What must you run before apt upgrade to refresh package lists?",
              choices: [
                { id: "a", text: "apt refresh" },
                { id: "b", text: "apt update" },
                { id: "c", text: "apt sync" },
                { id: "d", text: "apt index" },
              ],
              correctChoiceId: "b",
              explanation:
                "apt update downloads the latest package index from configured repositories before upgrading.",
            },
            {
              id: "package-management-q3",
              prompt: "Which tool lists all installed RPM packages?",
              choices: [
                { id: "a", text: "rpm -qa" },
                { id: "b", text: "rpm -ql" },
                { id: "c", text: "dnf list available" },
                { id: "d", text: "dpkg -l" },
              ],
              correctChoiceId: "a",
              explanation:
                "rpm -qa queries all installed packages on RPM-based systems.",
            },
            {
              id: "package-management-q4",
              prompt: "Which package manager is native to RHEL 8 and Fedora?",
              choices: [
                { id: "a", text: "apt" },
                { id: "b", text: "zypper" },
                { id: "c", text: "dnf" },
                { id: "d", text: "pacman" },
              ],
              correctChoiceId: "c",
              explanation:
                "dnf (Dandified YUM) is the default package manager for modern RHEL and Fedora systems.",
            },
            {
              id: "package-management-q5",
              prompt: "What file format do Debian-based distributions use for packages?",
              choices: [
                { id: "a", text: ".rpm" },
                { id: "b", text: ".deb" },
                { id: "c", text: ".tar.gz" },
                { id: "d", text: ".pkg" },
              ],
              correctChoiceId: "b",
              explanation:
                "Debian and Ubuntu packages use the .deb format, managed by dpkg and apt.",
            },
          ],
          flashcards: [
            {
              id: "package-management-f1",
              front: "Debian/Ubuntu package install command?",
              back: "apt install packagename",
            },
            {
              id: "package-management-f2",
              front: "RHEL/Fedora package manager?",
              back: "dnf",
            },
            {
              id: "package-management-f3",
              front: "Command to refresh apt package lists?",
              back: "apt update",
            },
            {
              id: "package-management-f4",
              front: "Search package names/descriptions on Debian?",
              back: "apt search keyword",
            },
            {
              id: "package-management-f5",
              front: "Verify RPM package integrity?",
              back: "rpm -V packagename",
            },
          ],
          objectives: ["XK0-005-1.9","XK0-005-1.10"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          questionBank: [
                    {
                              "id": "package-management-bank-q1",
                              "prompt": "Install local .deb without apt?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "apt local"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "deb -i"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "dpkg -i package.deb"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "rpm -i"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "dpkg -i installs a local Debian package file."
                    },
                    {
                              "id": "package-management-bank-q2",
                              "prompt": "Remove package and config files on Debian?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "apt remove only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "apt purge packagename"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "dpkg -r --purge-config"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "apt delete"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "apt purge removes configuration files along with the package."
                    },
                    {
                              "id": "package-management-bank-q3",
                              "prompt": "Which lists files installed by an RPM package?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "rpm -ql packagename"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "rpm -qa"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "dnf list"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "rpm -qi only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "rpm -ql queries the file list owned by the package."
                    },
                    {
                              "id": "package-management-bank-q4",
                              "prompt": "SUSE primary CLI package tool?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "apt"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "dnf"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "pacman"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "zypper"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "zypper manages packages on openSUSE."
                    },
                    {
                              "id": "package-management-bank-q5",
                              "prompt": "Hold a package from upgrades on Debian?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "apt freeze"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "dpkg --hold only without apt-mark"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "apt-mark hold packagename"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "apt lock"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "apt-mark hold prevents automatic upgrades."
                    },
                    {
                              "id": "package-management-bank-q6",
                              "prompt": "Flatpak installs are often user-wide under:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/usr/flatpak only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "~/.local/share/flatpak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/etc/flatpak-home"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/var/snap"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Flatpak can install per-user without root in default config."
                    },
                    {
                              "id": "package-management-bank-q7",
                              "prompt": "Which refreshes ONLY security updates on RHEL with dnf?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "dnf upgrade --security"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "dnf update --minimal only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "yum secure-only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "rpm --patch"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "dnf upgrade --security limits updates to security advisories when configured."
                    },
                    {
                              "id": "package-management-bank-q8",
                              "prompt": "Which command installs a package on Debian/Ubuntu?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "apt install packagename"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "dnf install packagename"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "zypper add packagename"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "rpm -i packagename only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Debian and Ubuntu use apt (or apt-get) for package installation with dependency resolution."
                    }
          ],
          assignments: [
                    {
                              "id": "linux-package-drill-1",
                              "title": "Simulator: Package Manager Command Drill",
                              "type": "simulator",
                              "instructions": "Run the package manager drill to match apt/dnf/rpm commands to scenarios. Focus on install, update, query, and remove operations across Debian and RPM families.",
                              "estimatedMinutes": 15,
                              "simulatorId": "linux-package-drill",
                              "completionCriteria": [
                                        "Finish the full drill session",
                                        "Score at least 80%",
                                        "Note any command families you confused (apt vs dnf vs rpm)"
                              ],
                              "relatedTopicIds": [
                                        "package-management"
                              ],
                              "order": 1
                    }
          ],
        },
        {
          id: "system-services",
          name: "System Services",
          lesson: {
            title: "Managing System Services with systemd",
            content: `systemd is the init system and service manager on most modern Linux distributions. It starts services at boot, manages dependencies, and handles logging through journald. Service unit files live in /usr/lib/systemd/system/ (vendor) and /etc/systemd/system/ (admin overrides).

Use systemctl start servicename to start a service immediately, systemctl stop to halt it, systemctl restart to stop and start, and systemctl reload to apply config changes without full restart. systemctl enable creates symlinks so a service starts at boot; systemctl disable removes them. systemctl status shows current state and recent log entries.

systemctl list-units displays active units. Target units (like multi-user.target) group services for specific boot states—similar to runlevels. Run systemctl get-default to see the current target and systemctl set-default to change it.

After editing unit files, run systemctl daemon-reload before restarting affected services. journalctl -u servicename views service-specific logs. Understanding systemd is essential for managing web servers, databases, and any daemon that must run reliably across reboots.

Unit file sections [Unit], [Service], and [Install] each serve distinct roles—WantedBy= in [Install] ties to targets for enable. systemctl mask prevents even manual starts (stronger than disable). Failed units show in systemctl --failed.

After the systemd simulator, complete the VirtualBox VM lab to cement start/enable/status/journalctl workflow. Compare legacy SysV init scripts only conceptually—Linux+ focuses on systemd. Timers (systemd timers) replace cron in modern unit-based scheduling questions.`,
          },
          keyFacts: [
            "systemctl start/stop/restart/reload controls service state",
            "systemctl enable/disable controls whether a service starts at boot",
            "Unit files reside in /usr/lib/systemd/system/ and /etc/systemd/system/",
            "systemctl daemon-reload applies changes after editing unit files",
            "journalctl -u servicename views logs for a specific service",
            "Targets (e.g., multi-user.target) define groups of services for boot states",
          ],
          guidedExample: {
            title: "Enable and Troubleshoot a systemd Service",
            steps: [
              "Check service status: systemctl status sshd.",
              "If inactive, start it: sudo systemctl start sshd.",
              "Enable at boot: sudo systemctl enable sshd.",
              "Verify enabled state: systemctl is-enabled sshd.",
              "If failed, inspect logs: journalctl -u sshd -e --no-pager.",
              "After config change, reload and restart: sudo systemctl daemon-reload && sudo systemctl restart sshd.",
            ],
          },
          commonMistakes: [
            "Using service and chkconfig commands instead of systemctl on systemd systems",
            "Forgetting daemon-reload after editing unit files in /etc/systemd/system",
            "Confusing systemctl restart with reload for services supporting reload",
            "Assuming enable starts the service immediately without start command",
            "Mixing up target units (multi-user.target) with individual service units",
          ],
          examTraps: [
            "systemctl enable --now combines enable and start in one command",
            "journalctl -u servicename vs cat /var/log/messages for service logs",
            "Failed state investigation with systemctl status and journalctl -xe",
            "Mask vs disable vs stop—mask prevents manual and automatic start",
            "Wants vs Requires dependency directives in unit file sections",
          ],
          realWorldScenario: "After deploying a new API, the api-server.service fails on boot. You run systemctl status to see exit code 1, check journalctl -u api-server for 'permission denied' on a config file, fix permissions with chmod 640 and chown root:apisvc, run daemon-reload, restart the service, and confirm it reaches active (running) before closing the change ticket.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["command-line-basics", "processes"],
          quiz: [
            {
              id: "system-services-q1",
              prompt: "Which command enables a service to start automatically at boot?",
              choices: [
                { id: "a", text: "systemctl start" },
                { id: "b", text: "systemctl enable" },
                { id: "c", text: "systemctl activate" },
                { id: "d", text: "systemctl boot" },
              ],
              correctChoiceId: "b",
              explanation:
                "systemctl enable creates the symlinks needed for a service to start at boot.",
            },
            {
              id: "system-services-q2",
              prompt: "What must you run after modifying a systemd unit file?",
              choices: [
                { id: "a", text: "systemctl refresh" },
                { id: "b", text: "systemctl daemon-reload" },
                { id: "c", text: "systemctl update" },
                { id: "d", text: "systemctl reconfigure" },
              ],
              correctChoiceId: "b",
              explanation:
                "daemon-reload tells systemd to re-read unit files after administrative changes.",
            },
            {
              id: "system-services-q3",
              prompt: "Which command shows the status and recent logs of a service?",
              choices: [
                { id: "a", text: "service --status" },
                { id: "b", text: "systemctl status" },
                { id: "c", text: "journalctl --boot" },
                { id: "d", text: "systemd-check" },
              ],
              correctChoiceId: "b",
              explanation:
                "systemctl status displays whether a service is active, enabled, and shows recent journal entries.",
            },
            {
              id: "system-services-q4",
              prompt: "Where are vendor-provided systemd unit files typically stored?",
              choices: [
                { id: "a", text: "/etc/systemd/system/" },
                { id: "b", text: "/usr/lib/systemd/system/" },
                { id: "c", text: "/var/lib/systemd/" },
                { id: "d", text: "/run/systemd/units/" },
              ],
              correctChoiceId: "b",
              explanation:
                "Package-installed unit files go in /usr/lib/systemd/system/. Admin overrides belong in /etc/systemd/system/.",
            },
            {
              id: "system-services-q5",
              prompt: "Which command views logs for a specific systemd service?",
              choices: [
                { id: "a", text: "syslog -u servicename" },
                { id: "b", text: "journalctl -u servicename" },
                { id: "c", text: "dmesg -s servicename" },
                { id: "d", text: "logread servicename" },
              ],
              correctChoiceId: "b",
              explanation:
                "journalctl -u filters the systemd journal to show entries for the specified unit.",
            },
          ],
          flashcards: [
            {
              id: "system-services-f1",
              front: "Enable a service at boot?",
              back: "systemctl enable servicename",
            },
            {
              id: "system-services-f2",
              front: "Reload systemd after editing unit files?",
              back: "systemctl daemon-reload",
            },
            {
              id: "system-services-f3",
              front: "View logs for a specific service?",
              back: "journalctl -u servicename",
            },
            {
              id: "system-services-f4",
              front: "Prevent a unit from starting even manually?",
              back: "systemctl mask unit",
            },
            {
              id: "system-services-f5",
              front: "List failed systemd units?",
              back: "systemctl --failed",
            },
          ],
          objectives: ["XK0-005-1.11","XK0-005-1.12"],
          practiceType: ["reading","quiz","flashcard","simulator","external-lab"],
          questionBank: [
                    {
                              "id": "system-services-bank-q1",
                              "prompt": "After editing a unit file you must run:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "systemctl restart systemd"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "systemctl daemon-reload"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "init q"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "reboot always"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "daemon-reload picks up unit file changes."
                    },
                    {
                              "id": "system-services-bank-q2",
                              "prompt": "View logs since last boot for a service?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "journalctl -b0 only without -u"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "cat /var/log/messages"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "journalctl -u servicename -b"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "dmesg -u"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "journalctl -u unit -b filters by unit since current boot."
                    },
                    {
                              "id": "system-services-bank-q3",
                              "prompt": "Default boot target on most server installs resembles:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "multi-user.target"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "graphical.target only always"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "rescue.target"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "halt.target"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "multi-user.target is standard multi-user non-graphical boot."
                    },
                    {
                              "id": "system-services-bank-q4",
                              "prompt": "Which shows whether a service is enabled?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "systemctl show -p Active"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "service --status"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "chkconfig only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "systemctl is-enabled servicename"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "is-enabled reports boot-time enablement state."
                    },
                    {
                              "id": "system-services-bank-q5",
                              "prompt": "PID 1 on systemd systems is:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "init"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "systemd"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "kernel"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "udevd only"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "systemd runs as PID 1 after kernel handoff."
                    },
                    {
                              "id": "system-services-bank-q6",
                              "prompt": "Replace cron with systemd:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "timer units"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "socket units only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "path units only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "slice units"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "timer units schedule service activation on calendar or monotonic triggers."
                    },
                    {
                              "id": "system-services-bank-q7",
                              "prompt": "Emergency maintenance target:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "multi-user"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "poweroff.target"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "rescue.target or emergency.target"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "network.target"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "rescue/emergency targets provide minimal root shell environments."
                    },
                    {
                              "id": "system-services-bank-q8",
                              "prompt": "After editing a systemd unit file, which command must you run first?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "systemctl daemon-reload"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "systemctl reboot"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "service --reload-all"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "kill -HUP 1"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "systemctl daemon-reload reloads unit file changes before restart or enable takes effect."
                    }
          ],
          assignments: [
                    {
                              "id": "linux-systemd-drill-1",
                              "title": "Simulator: systemd & journalctl Drill",
                              "type": "simulator",
                              "instructions": "Practice systemctl and journalctl commands in the in-app drill. Match commands to scenarios for starting, enabling, checking status, and viewing service logs.",
                              "estimatedMinutes": 15,
                              "simulatorId": "linux-systemd-drill",
                              "completionCriteria": [
                                        "Complete the drill session",
                                        "Score at least 80%",
                                        "Review weak concepts for systemctl vs journalctl usage"
                              ],
                              "relatedTopicIds": [
                                        "system-services"
                              ],
                              "order": 1
                    },
                    {
                              "id": "linux-systemd-vm-lab-1",
                              "title": "Lab: Manage Services with systemd in Your VM",
                              "type": "external-lab",
                              "instructions": "In your VirtualBox Linux VM, complete these hands-on steps:\n\n1. Install nginx (apt install nginx or dnf install nginx).\n2. Start nginx with systemctl start nginx and verify with systemctl status nginx.\n3. Enable nginx at boot with systemctl enable nginx.\n4. Edit the default site or create a simple index.html in the web root.\n5. Use journalctl -u nginx --since today to view service logs.\n6. Stop and disable nginx, then re-enable and confirm it starts on reboot.\n\nDocument any errors and how you resolved them using journalctl output.",
                              "estimatedMinutes": 45,
                              "externalResourceId": "virtualbox",
                              "completionCriteria": [
                                        "nginx installed and running via systemctl",
                                        "Service enabled for boot (systemctl is-enabled shows enabled)",
                                        "Custom content served or verified with curl localhost",
                                        "journalctl used to inspect at least one log entry"
                              ],
                              "relatedTopicIds": [
                                        "system-services",
                                        "processes"
                              ],
                              "order": 2
                    }
          ],
          externalResources: [
                    {
                              "id": "virtualbox",
                              "name": "Oracle VirtualBox",
                              "url": "https://www.virtualbox.org/",
                              "cost": "free",
                              "platform": "any",
                              "installNotes": "Install VirtualBox, then create a VM with Ubuntu Server or Fedora. Allocate 2 GB RAM and 20 GB disk for lab exercises."
                    },
                    {
                              "id": "ubuntu-server-iso",
                              "name": "Ubuntu Server ISO",
                              "url": "https://ubuntu.com/download/server",
                              "cost": "free",
                              "platform": "any",
                              "installNotes": "Download the LTS ISO and attach it when creating a new VirtualBox VM."
                    }
          ],
        },
        {
          id: "processes",
          name: "Processes",
          lesson: {
            title: "Managing Linux Processes",
            content: `A process is a running instance of a program. Each process has a unique PID (Process ID), a parent PID (PPID), and runs under a specific user. The ps command lists processes—ps aux shows all processes with detailed info. top and htop provide real-time interactive monitoring of CPU, memory, and process activity.

Background jobs run with & appended to the command. fg brings a background job to the foreground; bg resumes a stopped job in the background. jobs lists shell-managed background tasks. kill sends signals to processes—SIGTERM (15) requests graceful termination, SIGKILL (9) forces immediate termination.

nice and renice adjust process priority (niceness values from -20 highest to 19 lowest). Lower nice values get more CPU time but require root privileges below the default of 0. pgrep finds processes by name; pkill sends signals to matching processes.

Zombie processes have terminated but retain an entry until the parent calls wait(). Orphan processes are reparented to init/systemd when their parent exits. Understanding process management helps diagnose runaway applications, resource exhaustion, and hung services during troubleshooting.

Process priority uses nice values (-20 highest to 19 lowest). renice and nice adjust scheduling. Parent PPID and orphan adoption by init/systemd appear in troubleshooting stems. Zombie processes (Z state) await parent wait(); killing parent may re-parent to PID 1.

Signals: SIGTERM (15) graceful, SIGKILL (9) force (cannot catch), SIGHUP reload configs for daemons. pgrep and pkill filter by name; killall sends signals by executable name—use carefully on shared systems.`,
          },
          keyFacts: [
            "ps aux lists all running processes with user, PID, CPU, and memory usage",
            "kill -15 (SIGTERM) gracefully terminates; kill -9 (SIGKILL) forces immediate stop",
            "nice/renice adjust scheduling priority from -20 (highest) to 19 (lowest)",
            "top and htop provide real-time process and resource monitoring",
            "& runs a command in the background; fg and bg manage job control",
            "Zombie processes await parent cleanup; orphans are adopted by init/systemd",
          ],
          commonMistakes: [
            "Confusing foreground vs background job control with systemd services",
            "Mixing up kill signals—SIGTERM (15) vs SIGKILL (9)",
            "Assuming kill -9 is always the first choice for stopping processes",
            "Forgetting zombie processes require parent to reap, not kill -9 on zombie",
            "Believing ps aux and ps -ef show identical output formats",
          ],
          examTraps: [
            "SIGTERM allows graceful shutdown vs SIGKILL immediate termination",
            "Parent PID 1 traditionally systemd absorbing orphaned processes",
            "nice and renice priority values—lower number higher priority on Linux",
            "fg and bg job control vs nohup for terminal disconnect persistence",
            "top vs htop vs ps for real-time monitoring scenarios",
          ],
          quiz: [
            {
              id: "processes-q1",
              prompt: "Which signal forces a process to terminate immediately without cleanup?",
              choices: [
                { id: "a", text: "SIGTERM (15)" },
                { id: "b", text: "SIGHUP (1)" },
                { id: "c", text: "SIGKILL (9)" },
                { id: "d", text: "SIGSTOP (19)" },
              ],
              correctChoiceId: "c",
              explanation:
                "SIGKILL (9) cannot be caught or ignored and immediately terminates the process.",
            },
            {
              id: "processes-q2",
              prompt: "Which command shows all running processes with detailed information?",
              choices: [
                { id: "a", text: "ps aux" },
                { id: "b", text: "proc -a" },
                { id: "c", text: "listproc" },
                { id: "d", text: "pidof -a" },
              ],
              correctChoiceId: "a",
              explanation:
                "ps aux displays all processes with user, PID, CPU%, memory%, and command columns.",
            },
            {
              id: "processes-q3",
              prompt: "What does appending & to a command do?",
              choices: [
                { id: "a", text: "Runs the command with root privileges" },
                { id: "b", text: "Runs the command in the background" },
                { id: "c", text: "Redirects output to a log file" },
                { id: "d", text: "Repeats the command continuously" },
              ],
              correctChoiceId: "b",
              explanation:
                "The & operator starts the command as a background job, returning shell control immediately.",
            },
            {
              id: "processes-q4",
              prompt: "Which nice value gives a process the highest scheduling priority?",
              choices: [
                { id: "a", text: "-20" },
                { id: "b", text: "0" },
                { id: "c", text: "10" },
                { id: "d", text: "19" },
              ],
              correctChoiceId: "a",
              explanation:
                "Nice values range from -20 (highest priority) to 19 (lowest). Only root can set negative nice values.",
            },
            {
              id: "processes-q5",
              prompt: "What is a zombie process?",
              choices: [
                { id: "a", text: "A process using 100% CPU" },
                { id: "b", text: "A terminated process awaiting parent acknowledgment" },
                { id: "c", text: "A process with no assigned user" },
                { id: "d", text: "A process running without a terminal" },
              ],
              correctChoiceId: "b",
              explanation:
                "Zombie processes have completed execution but retain a process table entry until the parent reaps them with wait().",
            },
          ],
          flashcards: [
            {
              id: "processes-f1",
              front: "Graceful vs forced process termination signals?",
              back: "SIGTERM (15) graceful; SIGKILL (9) forced",
            },
            {
              id: "processes-f2",
              front: "Command to monitor processes in real time?",
              back: "top or htop",
            },
            {
              id: "processes-f3",
              front: "What does & at the end of a command do?",
              back: "Runs the command in the background",
            },
            {
              id: "processes-f4",
              front: "Force kill a process (non-catchable)?",
              back: "kill -9 PID",
            },
            {
              id: "processes-f5",
              front: "Highest nice priority value?",
              back: "-20 (lower nice = higher priority)",
            },
          ],
          objectives: ["XK0-005-1.13","XK0-005-4.3"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "processes-bank-q1",
                              "prompt": "Which shows processes in tree form?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ps -e only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "jobs -l"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "ps auxf or pstree"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "proc -t"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "pstree and ps forest views show parent-child relationships."
                    },
                    {
                              "id": "processes-bank-q2",
                              "prompt": "Zombie process state letter?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "X"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Z"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "T"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "D"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Z indicates zombie—terminated but not reaped by parent."
                    },
                    {
                              "id": "processes-bank-q3",
                              "prompt": "Run command with lower priority:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "nice -n 10 command"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "priority -l"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "slow command"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ionice only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "nice launches with adjusted priority."
                    },
                    {
                              "id": "processes-bank-q4",
                              "prompt": "Foreground job to background:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "bg only without stop"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl+Z then fg"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "kill -STOP"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl+Z then bg"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "Stop with Ctrl+Z, resume in background with bg."
                    },
                    {
                              "id": "processes-bank-q5",
                              "prompt": "Which file in /proc/PID/ shows command line?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "status only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "cmdline"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "exe only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "maps always"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "/proc/PID/cmdline contains the launched command."
                    },
                    {
                              "id": "processes-bank-q6",
                              "prompt": "SIGTERM default signal number?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "9"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "15"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "2"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "SIGTERM is signal 15—polite termination request."
                    },
                    {
                              "id": "processes-bank-q7",
                              "prompt": "Find processes by name:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "pgrep name"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "pidof name only on all"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "find /proc -name"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ps --grep"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "pgrep returns PIDs matching process name."
                    }
          ],

        },
        {
          id: "storage",
          name: "Storage",
          lesson: {
            title: "Linux Storage Management",
            content: `Linux storage management involves partitions, filesystems, mounting, and logical volume management. The lsblk command lists block devices and their partitions. fdisk, gdisk, and parted create and modify partition tables—MBR for legacy BIOS systems and GPT for modern UEFI systems.

After partitioning, create a filesystem with mkfs (e.g., mkfs.ext4 /dev/sdb1). Mount it temporarily with mount /dev/sdb1 /mnt/data or permanently by adding an entry to /etc/fstab. The df -h command shows mounted filesystem usage; du -sh summarizes directory disk usage.

LVM (Logical Volume Management) adds flexibility by abstracting physical disks into physical volumes (PVs), volume groups (VGs), and logical volumes (LVs). This allows resizing storage online without repartitioning. Commands include pvcreate, vgcreate, lvcreate, and lvextend.

Swap provides virtual memory when RAM is exhausted. swapon activates swap; /etc/fstab can mount swap at boot. Monitor storage with df, du, and lsblk to prevent full filesystems that crash services or prevent logging.

Partitioning: fdisk/gdisk for MBR/GPT; parted for scripting. mkfs.ext4 / mkfs.xfs create filesystems. mount /dev/sdb1 /mnt/data attaches temporarily; fstab makes persistent mounts with UUID= preferred over device names.

LVM adds PV → VG → LV abstraction for flexible resizing. lvcreate, lvextend, and xfs_growfs or resize2fs extend online storage. Swap files vs swap partitions—swapon activates. lsblk and blkid map block devices; exam items test mount option errors (ro, noexec, nosuid).`,
          },
          keyFacts: [
            "lsblk lists block devices; fdisk/parted manage partitions",
            "mkfs creates filesystems; mount attaches them to the directory tree",
            "/etc/fstab enables persistent mounts and swap at boot",
            "df -h shows filesystem usage; du -sh shows directory sizes",
            "LVM layers: PV (physical volume) → VG (volume group) → LV (logical volume)",
            "GPT supports disks larger than 2 TB; MBR is limited to four primary partitions",
          ],
          commonMistakes: [
            "Confusing fdisk/parted (partitioning) with mkfs (formatting)",
            "Mixing up LVM physical volumes, volume groups, and logical volumes",
            "Assuming mount is permanent without /etc/fstab entry",
            "Forgetting to umount before removing storage hardware",
            "Believing df shows file-level usage while du shows filesystem-level only",
          ],
          examTraps: [
            "df -h filesystem usage vs du -sh directory usage",
            "LVM extend logical volume then resize filesystem two-step process",
            "GPT vs MBR partition table on modern systems",
            "UUID in fstab vs device name /dev/sdb reliability",
            "Swap partition vs swap file configuration scenarios",
          ],
          quiz: [
            {
              id: "storage-q1",
              prompt: "Which command lists block devices and their partition layout?",
              choices: [
                { id: "a", text: "df -h" },
                { id: "b", text: "lsblk" },
                { id: "c", text: "fdisk -l" },
                { id: "d", text: "blkid" },
              ],
              correctChoiceId: "b",
              explanation:
                "lsblk displays block devices in a tree format showing partitions and mount points.",
            },
            {
              id: "storage-q2",
              prompt: "Which command creates a filesystem on a partition?",
              choices: [
                { id: "a", text: "mkfs" },
                { id: "b", text: "mount" },
                { id: "c", text: "format" },
                { id: "d", text: "parted" },
              ],
              correctChoiceId: "a",
              explanation:
                "mkfs (e.g., mkfs.ext4) writes a filesystem structure to a partition or device.",
            },
            {
              id: "storage-q3",
              prompt: "In LVM, what does a volume group (VG) contain?",
              choices: [
                { id: "a", text: "Logical volumes only" },
                { id: "b", text: "Physical volumes combined into a pool of storage" },
                { id: "c", text: "Swap partitions exclusively" },
                { id: "d", text: "Network-attached storage mounts" },
              ],
              correctChoiceId: "b",
              explanation:
                "A volume group aggregates one or more physical volumes, from which logical volumes are allocated.",
            },
            {
              id: "storage-q4",
              prompt: "Which command shows disk space usage of mounted filesystems?",
              choices: [
                { id: "a", text: "du -h" },
                { id: "b", text: "df -h" },
                { id: "c", text: "free -h" },
                { id: "d", text: "ls -lh" },
              ],
              correctChoiceId: "b",
              explanation:
                "df -h reports total, used, and available space on mounted filesystems in human-readable units.",
            },
            {
              id: "storage-q5",
              prompt: "Which partition table supports disks larger than 2 TB?",
              choices: [
                { id: "a", text: "MBR" },
                { id: "b", text: "GPT" },
                { id: "c", text: "FAT32" },
                { id: "d", text: "Extended MBR only" },
              ],
              correctChoiceId: "b",
              explanation:
                "GPT (GUID Partition Table) supports large disks and is standard for UEFI systems.",
            },
          ],
          flashcards: [
            {
              id: "storage-f1",
              front: "List block devices and partitions?",
              back: "lsblk",
            },
            {
              id: "storage-f2",
              front: "LVM hierarchy order?",
              back: "PV → VG → LV",
            },
            {
              id: "storage-f3",
              front: "Show mounted filesystem disk usage?",
              back: "df -h",
            },
            {
              id: "storage-f4",
              front: "Create ext4 filesystem on partition?",
              back: "mkfs.ext4 /dev/sdX1",
            },
            {
              id: "storage-f5",
              front: "Show block device tree with sizes?",
              back: "lsblk",
            },
          ],
          objectives: ["XK0-005-1.14","XK0-005-1.15"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "storage-bank-q1",
                              "prompt": "Persistent mounts configured in:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/fstab"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/mtab only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/boot/grub"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/proc/mounts"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "fstab defines boot-time and static mount entries."
                    },
                    {
                              "id": "storage-bank-q2",
                              "prompt": "Why use UUID= in fstab instead of /dev/sdX?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "Faster boot only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Device names may change across reboots"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Required for ext4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "UUID disables permissions"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "UUIDs remain stable when disk enumeration order shifts."
                    },
                    {
                              "id": "storage-bank-q3",
                              "prompt": "Activate swap partition:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "swap on -a only without swapon"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "mkswap --enable"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "swapon /dev/sdXn"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "enable swap.target only"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "swapon enables a swap area."
                    },
                    {
                              "id": "storage-bank-q4",
                              "prompt": "LVM logical volume created with:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "pvcreate only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "vgdisplay"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "fdisk -l"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "lvcreate -L size -n name vgname"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "lvcreate allocates logical volumes from a volume group."
                    },
                    {
                              "id": "storage-bank-q5",
                              "prompt": "GPT partitioning tool for large disks:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "fdisk only on all sizes"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "gdisk or parted"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "mkfs"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "fsck"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "gdisk/parted handle GPT partitions beyond MBR limits."
                    },
                    {
                              "id": "storage-bank-q6",
                              "prompt": "Check filesystem for errors (ext family)?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "fsck /dev/sdXn"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "chkdsk"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "scandisk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "mount -c"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "fsck repairs ext2/3/4 filesystems (usually unmounted)."
                    },
                    {
                              "id": "storage-bank-q7",
                              "prompt": "Display disk UUIDs:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "uuidgen only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ls -uuid"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "blkid"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "df -u"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "blkid shows UUID and filesystem type for block devices."
                    }
          ],

        },
      ],
    },
    {
      id: "networking-scripting",
      name: "Networking & Scripting",
      topics: [
        {
          id: "networking-commands",
          name: "Networking Commands",
          lesson: {
            title: "Essential Linux Networking Commands",
            content: `Linux networking commands configure interfaces, test connectivity, and diagnose issues. ip addr (or ip a) shows interface addresses; ip link shows link state; ip route displays the routing table. The legacy ifconfig and route commands remain available but ip from iproute2 is preferred on modern systems.

ping tests ICMP reachability to a host. traceroute (or tracepath) maps the path packets take across routers. ss -tulpn lists listening TCP/UDP sockets with associated processes—replacing netstat on most systems. curl and wget retrieve web content from the command line for testing HTTP services.

Configure interfaces with ip addr add or through network manager tools like nmcli on systems using NetworkManager. DNS resolution is defined in /etc/resolv.conf (or managed by systemd-resolved). /etc/hosts provides local hostname-to-IP mappings.

firewall-cmd (firewalld) and ufw (Uncomplicated Firewall) manage host-based firewalls. Test connectivity systematically: verify interface up, IP assigned, default gateway reachable, DNS resolving, and remote service responding on the expected port.

Modern iproute2 commands replace legacy ifconfig/route: ip link set eth0 up, ip addr add, ip route add default via gateway. ss -tulpn shows listening sockets faster than netstat on current systems.

NetworkManager (nmcli) manages connections on desktops/servers. /etc/hosts overrides DNS locally; /etc/resolv.conf points to DNS servers (often managed by systemd-resolved). curl and wget test HTTP; traceroute/tracepath map path. Firewall interactions (iptables/nftables, ufw, firewalld) tie to security objectives.`,
          },
          keyFacts: [
            "ip addr, ip link, and ip route are modern replacements for ifconfig and route",
            "ping tests reachability; traceroute shows the network path to a destination",
            "ss -tulpn lists listening ports and associated processes",
            "DNS servers are configured in /etc/resolv.conf or via NetworkManager/systemd-resolved",
            "curl and wget test HTTP/HTTPS connectivity from the command line",
            "ufw and firewall-cmd manage host firewalls on Ubuntu and RHEL respectively",
          ],
          commonMistakes: [
            "Confusing ip addr/route (modern) with ifconfig/route (legacy)",
            "Mixing up ss and netstat for socket statistics",
            "Assuming ping failure always means the remote host is down",
            "Forgetting firewalls can block ICMP while TCP services remain reachable",
            "Believing hostname -I and ip addr show different unrelated information",
          ],
          examTraps: [
            "ss -tuln vs netstat -tuln listening port display",
            "traceroute/tracepath path discovery vs ping reachability",
            "DNS resolution failure vs network unreachable error messages",
            "nmcli for NetworkManager vs manual /etc/network/interfaces on older systems",
            "curl vs wget for HTTP testing vs file download scenarios",
          ],
          quiz: [
            {
              id: "networking-commands-q1",
              prompt: "Which command shows IP addresses assigned to network interfaces?",
              choices: [
                { id: "a", text: "ip addr" },
                { id: "b", text: "ip route" },
                { id: "c", text: "ss -l" },
                { id: "d", text: "netstat -r" },
              ],
              correctChoiceId: "a",
              explanation:
                "ip addr (or ip a) displays IP addresses, MAC addresses, and interface states.",
            },
            {
              id: "networking-commands-q2",
              prompt: "Which command lists listening TCP and UDP ports with process information?",
              choices: [
                { id: "a", text: "ping -l" },
                { id: "b", text: "ss -tulpn" },
                { id: "c", text: "ip link show" },
                { id: "d", text: "traceroute -p" },
              ],
              correctChoiceId: "b",
              explanation:
                "ss -tulpn shows TCP/UDP listening sockets with numeric ports and process names/PIDs.",
            },
            {
              id: "networking-commands-q3",
              prompt: "Where are DNS resolver addresses typically configured?",
              choices: [
                { id: "a", text: "/etc/hosts" },
                { id: "b", text: "/etc/resolv.conf" },
                { id: "c", text: "/etc/networks" },
                { id: "d", text: "/etc/dns.conf" },
              ],
              correctChoiceId: "b",
              explanation:
                "/etc/resolv.conf specifies nameserver IP addresses used for DNS resolution.",
            },
            {
              id: "networking-commands-q4",
              prompt: "Which command tests basic network connectivity to a remote host?",
              choices: [
                { id: "a", text: "dig" },
                { id: "b", text: "ping" },
                { id: "c", text: "host" },
                { id: "d", text: "nslookup" },
              ],
              correctChoiceId: "b",
              explanation:
                "ping sends ICMP echo requests to verify that a host is reachable on the network.",
            },
            {
              id: "networking-commands-q5",
              prompt: "Which tool displays the route packets take to reach a destination?",
              choices: [
                { id: "a", text: "route print" },
                { id: "b", text: "traceroute" },
                { id: "c", text: "ip link" },
                { id: "d", text: "arp -a" },
              ],
              correctChoiceId: "b",
              explanation:
                "traceroute (or tracepath) shows each hop along the path to the destination host.",
            },
          ],
          flashcards: [
            {
              id: "networking-commands-f1",
              front: "Show IP addresses on interfaces?",
              back: "ip addr",
            },
            {
              id: "networking-commands-f2",
              front: "List listening ports with processes?",
              back: "ss -tulpn",
            },
            {
              id: "networking-commands-f3",
              front: "DNS nameserver config file?",
              back: "/etc/resolv.conf",
            },
            {
              id: "networking-commands-f4",
              front: "Show listening TCP/UDP ports?",
              back: "ss -tulpn",
            },
            {
              id: "networking-commands-f5",
              front: "Add IP address with iproute2?",
              back: "ip addr add 192.168.1.10/24 dev eth0",
            },
          ],
          objectives: ["XK0-005-3.1","XK0-005-3.2"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "networking-commands-bank-q1",
                              "prompt": "Legacy command to configure interfaces (deprecated)?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ip link only didn't exist"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ifconfig"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "netcfg"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "route only"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "ifconfig remains common but ip is preferred on exams."
                    },
                    {
                              "id": "networking-commands-bank-q2",
                              "prompt": "Test DNS resolution:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ping dns"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ns only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "dig example.com or nslookup"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ip dns"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "dig/nslookup query DNS records."
                    },
                    {
                              "id": "networking-commands-bank-q3",
                              "prompt": "Show routing table with iproute2:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ip route show"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "route -n only on all"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "netstat -r only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "traceroute"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "ip route show displays the kernel routing table."
                    },
                    {
                              "id": "networking-commands-bank-q4",
                              "prompt": "Which file overrides hostname to IP locally?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/resolv.conf"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/nsswitch only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/etc/networks"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/etc/hosts"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "/etc/hosts provides static name mappings."
                    },
                    {
                              "id": "networking-commands-bank-q5",
                              "prompt": "Bring interface eth0 up:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ifup only always"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ip link set eth0 up"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "net up eth0"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "start eth0"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "ip link set dev up activates the interface."
                    },
                    {
                              "id": "networking-commands-bank-q6",
                              "prompt": "Capture packets for analysis:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "tcpdump only GUI"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ping -c"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "tcpdump or tshark"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ss -cap"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "tcpdump captures packets on interfaces."
                    },
                    {
                              "id": "networking-commands-bank-q7",
                              "prompt": "NetworkManager CLI:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "nmcli"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "nmtui only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "netman"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "systemctl network"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "nmcli configures NetworkManager connections."
                    }
          ],

        },
        {
          id: "shell-scripting-basics",
          name: "Shell Scripting Basics",
          lesson: {
            title: "Bash Shell Scripting Fundamentals",
            content: `Shell scripts automate repetitive administration tasks. Bash scripts begin with a shebang line (#!/bin/bash) specifying the interpreter. Make scripts executable with chmod +x script.sh and run them with ./script.sh or bash script.sh.

Variables store data—assign with name=value (no spaces). Access values with $name or \${name}. Command substitution captures output: result=$(command). Positional parameters ($1, $2, $*) pass arguments from the command line. $# counts arguments; $? holds the exit code of the last command.

Control structures include if/then/else/fi for conditionals, for and while loops for iteration, and case for multi-branch decisions. Test conditions with [ ] or [[ ]]—check file existence (-f), directory (-d), string equality (-eq for numbers, = for strings).

Functions group reusable code. Exit codes 0 mean success; non-zero indicates failure—essential for scripting logic and CI pipelines. Quote variables to prevent word splitting and glob expansion. Use set -e to exit on errors and set -u to catch unset variables in robust scripts.

Scripts start with shebang #!/bin/bash or #!/bin/sh. Test conditions with [ ] or [[ ]] in bash; -f file exists, -d directory, -z zero length string. if/then/else, for, while, and case control flow.

Exit codes: 0 success, non-zero failure—use $? immediately after command. set -e exits on error; set -u catches unset variables. Exam snippets ask what a loop prints or whether a test succeeds. Avoid spaces around = in assignments; quote variables handling user input to prevent word splitting.`,
          },
          keyFacts: [
            "Shebang (#!/bin/bash) specifies the script interpreter",
            "$1, $2 are positional parameters; $# is argument count; $? is last exit code",
            "Command substitution: $(command) captures command output into a variable",
            "Exit code 0 = success; non-zero = failure",
            "set -e exits on error; set -u errors on unset variables",
            "Always quote variables ($var) to handle spaces and special characters safely",
          ],
          commonMistakes: [
            "Forgetting shebang #!/bin/bash specifies the interpreter",
            "Confusing $1 (first argument) with $0 (script name) and $@ (all args)",
            "Using = for string comparison inside [ ] instead of inside [[ ]]",
            "Assuming scripts run without execute permission (chmod +x)",
            "Mixing up exit 0 (success) with exit 1 (failure) conventions",
          ],
          examTraps: [
            "$? holds exit code of last command",
            "Double brackets [[ ]] vs single brackets [ ] test syntax",
            "for loop over $(seq 1 5) vs {1..5} brace expansion",
            "Command substitution $(command) vs backticks",
            "set -e exits on error vs continuing after failed command",
          ],
          quiz: [
            {
              id: "shell-scripting-basics-q1",
              prompt: "What is the purpose of the shebang (#!/bin/bash) line?",
              choices: [
                { id: "a", text: "Enables debug mode" },
                { id: "b", text: "Specifies which interpreter executes the script" },
                { id: "c", text: "Sets script permissions" },
                { id: "d", text: "Imports library functions" },
              ],
              correctChoiceId: "b",
              explanation:
                "The shebang tells the kernel which program (e.g., /bin/bash) should execute the script.",
            },
            {
              id: "shell-scripting-basics-q2",
              prompt: "Which variable holds the exit status of the most recently executed command?",
              choices: [
                { id: "a", text: "$!" },
                { id: "b", text: "$?" },
                { id: "c", text: "$#" },
                { id: "d", text: "$$" },
              ],
              correctChoiceId: "b",
              explanation:
                "$? returns the exit code of the last command—0 for success, non-zero for failure.",
            },
            {
              id: "shell-scripting-basics-q3",
              prompt: "How do you capture command output into a variable in Bash?",
              choices: [
                { id: "a", text: "var = command" },
                { id: "b", text: "var=$(command)" },
                { id: "c", text: "var << command" },
                { id: "d", text: "var | command" },
              ],
              correctChoiceId: "b",
              explanation:
                "Command substitution with $(command) or backticks assigns command output to a variable.",
            },
            {
              id: "shell-scripting-basics-q4",
              prompt: "What exit code indicates successful command execution?",
              choices: [
                { id: "a", text: "0" },
                { id: "b", text: "1" },
                { id: "c", text: "-1" },
                { id: "d", text: "255" },
              ],
              correctChoiceId: "a",
              explanation:
                "By convention, exit code 0 means success; any non-zero value indicates an error.",
            },
            {
              id: "shell-scripting-basics-q5",
              prompt: "Which set option causes a script to exit immediately when a command fails?",
              choices: [
                { id: "a", text: "set -x" },
                { id: "b", text: "set -e" },
                { id: "c", text: "set -u" },
                { id: "d", text: "set -v" },
              ],
              correctChoiceId: "b",
              explanation:
                "set -e (errexit) terminates the script when any command returns a non-zero exit status.",
            },
          ],
          flashcards: [
            {
              id: "shell-scripting-basics-f1",
              front: "What does $? contain?",
              back: "Exit status of the last command",
            },
            {
              id: "shell-scripting-basics-f2",
              front: "Capture command output in a variable?",
              back: "var=$(command)",
            },
            {
              id: "shell-scripting-basics-f3",
              front: "Exit code for success?",
              back: "0",
            },
            {
              id: "shell-scripting-basics-f4",
              front: "Shebang line for bash?",
              back: "#!/bin/bash",
            },
            {
              id: "shell-scripting-basics-f5",
              front: "Exit code of last command?",
              back: "$?",
            },
          ],
          objectives: ["XK0-005-3.3","XK0-005-3.4"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "shell-scripting-basics-bank-q1",
                              "prompt": "Make script executable:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "exec script.sh"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "chmod +x script.sh"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "run +x"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "bash -x only"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Execute bit required for ./script.sh invocation."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q2",
                              "prompt": "Test if file exists in script:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "[ -f file ]"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "[ -d file only for files ]"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "test exists file"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "if file -e"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "-f tests for regular file existence."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q3",
                              "prompt": "Loop over command line arguments:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "for i in args"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "loop $@"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "for arg in \"$@\""
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "while args"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "$@ expands to positional parameters."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q4",
                              "prompt": "Append stdout and stderr to log:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "> log"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "2> log only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "| log"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": ">> log 2>&1"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": ">> log 2>&1 appends both streams."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q5",
                              "prompt": "Arithmetic in bash:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "$(( unavailable )"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "$(( a + b ))"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "math a+b"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "let only on sh"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "$(( )) performs integer arithmetic in bash."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q6",
                              "prompt": "Case statement terminator each branch:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": ";;"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ";; esac only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "done"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "fi"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Each case arm ends with ;; before esac."
                    },
                    {
                              "id": "shell-scripting-basics-bank-q7",
                              "prompt": "Debug script showing commands:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "bash -q"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "set +x"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "bash -x script.sh"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "chmod debug"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "bash -x traces executed commands."
                    }
          ],

        },
      ],
    },
    {
      id: "security-logging",
      name: "Security & Logging",
      topics: [
        {
          id: "logs",
          name: "Logs",
          lesson: {
            title: "Linux Logging and Journal Management",
            content: `Logs are essential for auditing, troubleshooting, and security monitoring. Traditional syslog writes to files in /var/log/—common files include syslog/messages for general logs, auth.log/secure for authentication events, kern.log for kernel messages, and apache2/nginx directories for web server logs.

systemd-journald collects logs in a binary journal accessed via journalctl. journalctl shows all logs; journalctl -u nginx filters by service; journalctl -f follows live output like tail -f; journalctl --since "1 hour ago" filters by time. journalctl -b shows logs from the current boot.

Log rotation prevents disks from filling up. logrotate, configured in /etc/logrotate.conf and /etc/logrotate.d/, compresses and archives old logs on a schedule. rsyslog and syslog-ng are syslog daemons that route log messages to files, remote servers, or databases.

Centralized logging sends logs to SIEM or aggregation servers for correlation. When investigating incidents, check auth logs for failed logins, application logs for errors, and kernel logs (dmesg) for hardware issues. Proper log management supports compliance and rapid incident response.

journalctl is primary on systemd systems: -p err filters priority, --since "1 hour ago" windows, -f follows live. Traditional text logs in /var/log/syslog, messages, auth.log, secure, and btmp/wtmp/lastlog for login history.

logrotate configs in /etc/logrotate.d/ prevent unbounded growth. rsyslog/syslog-ng forward remote logs. Complete the log triage simulator to practice spotting SSH brute force, sudo failures, and OOM killer messages before exam day.`,
          },
          keyFacts: [
            "/var/log/ stores traditional text log files on most distributions",
            "journalctl queries the systemd journal; journalctl -f follows live logs",
            "auth.log (Debian) or secure (RHEL) records authentication events",
            "logrotate in /etc/logrotate.d/ manages log compression and retention",
            "dmesg displays kernel ring buffer messages for hardware and driver events",
            "journalctl -u servicename filters logs to a specific systemd unit",
          ],
          commonMistakes: [
            "Confusing /var/log/messages with distribution-specific journal locations",
            "Mixing up syslog priorities (emerg through debug) numeric values",
            "Assuming logrotate configuration is in /etc/logrotate.d only",
            "Forgetting journalctl requires systemd-based distributions",
            "Believing deleted log files free disk space while a process still holds the file open",
          ],
          examTraps: [
            "journalctl -u servicename vs tail /var/log/syslog on Debian/Ubuntu",
            "logrotate size vs daily vs weekly rotation triggers",
            "rsyslog facility and priority filtering rules",
            "lsof showing deleted but open log files consuming disk space",
            "dmesg kernel ring buffer vs application logs in /var/log",
          ],
          quiz: [
            {
              id: "logs-q1",
              prompt: "Which command queries logs from the systemd journal?",
              choices: [
                { id: "a", text: "syslog -q" },
                { id: "b", text: "journalctl" },
                { id: "c", text: "logread" },
                { id: "d", text: "dmesg -j" },
              ],
              correctChoiceId: "b",
              explanation:
                "journalctl is the primary tool for reading and filtering systemd journal entries.",
            },
            {
              id: "logs-q2",
              prompt: "Where are authentication events typically logged on RHEL systems?",
              choices: [
                { id: "a", text: "/var/log/auth.log" },
                { id: "b", text: "/var/log/secure" },
                { id: "c", text: "/var/log/messages" },
                { id: "d", text: "/var/log/login.log" },
              ],
              correctChoiceId: "b",
              explanation:
                "RHEL and Fedora log authentication events to /var/log/secure. Debian/Ubuntu use /var/log/auth.log.",
            },
            {
              id: "logs-q3",
              prompt: "Which tool manages log rotation to prevent disks from filling?",
              choices: [
                { id: "a", text: "logrotate" },
                { id: "b", text: "rotatelogs" },
                { id: "c", text: "journalctl --vacuum" },
                { id: "d", text: "syslog-ng" },
              ],
              correctChoiceId: "a",
              explanation:
                "logrotate automatically compresses, rotates, and deletes old log files based on /etc/logrotate.conf rules.",
            },
            {
              id: "logs-q4",
              prompt: "Which journalctl option follows log output in real time?",
              choices: [
                { id: "a", text: "-b" },
                { id: "b", text: "-f" },
                { id: "c", text: "-u" },
                { id: "d", text: "-e" },
              ],
              correctChoiceId: "b",
              explanation:
                "journalctl -f (follow) displays new log entries as they arrive, similar to tail -f.",
            },
            {
              id: "logs-q5",
              prompt: "Which command displays kernel ring buffer messages?",
              choices: [
                { id: "a", text: "kernlog" },
                { id: "b", text: "dmesg" },
                { id: "c", text: "klog" },
                { id: "d", text: "journalctl -k" },
              ],
              correctChoiceId: "b",
              explanation:
                "dmesg prints kernel ring buffer messages. journalctl -k also shows kernel logs from the journal.",
            },
          ],
          flashcards: [
            {
              id: "logs-f1",
              front: "Query systemd journal logs?",
              back: "journalctl",
            },
            {
              id: "logs-f2",
              front: "RHEL authentication log file?",
              back: "/var/log/secure",
            },
            {
              id: "logs-f3",
              front: "Tool that rotates and compresses old logs?",
              back: "logrotate",
            },
            {
              id: "logs-f4",
              front: "Follow live journal entries?",
              back: "journalctl -f",
            },
            {
              id: "logs-f5",
              front: "Auth failures on Debian often in:",
              back: "/var/log/auth.log",
            },
          ],
          objectives: ["XK0-005-2.2","XK0-005-4.1"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          questionBank: [
                    {
                              "id": "logs-bank-q1",
                              "prompt": "Kernel ring buffer messages:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "journalctl only always"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "dmesg"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "lastlog"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "faillog"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "dmesg displays kernel log buffer."
                    },
                    {
                              "id": "logs-bank-q2",
                              "prompt": "Show failed login attempts file:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/var/log/wtmp"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/var/log/lastlog only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/var/log/btmp (lastb)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/etc/login.defs"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "btmp records failed login attempts; lastb reads it."
                    },
                    {
                              "id": "logs-bank-q3",
                              "prompt": "journalctl filter priority error and above:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "journalctl -p err"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "journalctl --error-only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "journalctl -e"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "journalctl -x"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "-p err shows err, crit, alert, emerg."
                    },
                    {
                              "id": "logs-bank-q4",
                              "prompt": "Log rotation config directory:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/var/log/rotate"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/syslog.d"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/usr/logrotate"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/etc/logrotate.d"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "Per-service logrotate rules live in logrotate.d."
                    },
                    {
                              "id": "logs-bank-q5",
                              "prompt": "Persistent journal storage controlled in:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/journald only without d"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/systemd/journald.conf"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/var/log/journald.conf"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/etc/rsyslog.conf only"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "journald.conf sets Storage=persistent vs volatile."
                    },
                    {
                              "id": "logs-bank-q6",
                              "prompt": "Remote syslog forwarding often uses:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "scp only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "telnet 514"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "rsyslog/syslog-ng config"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "curl logs"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "rsyslog/syslog-ng can forward to central collectors."
                    },
                    {
                              "id": "logs-bank-q7",
                              "prompt": "View last logged in users:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "last or lastlog"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "who -b only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "id"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "w -last"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "last reads /var/log/wtmp login records."
                    }
          ],
          assignments: [
                    {
                              "id": "linux-log-triage-1",
                              "title": "Simulator: Log Line Triage Drill",
                              "type": "simulator",
                              "instructions": "Complete the log line triage drill. Identify authentication failures, permission errors, and service failures from sample log lines—skills directly tested on Linux+ and CySA+ style scenarios.",
                              "estimatedMinutes": 15,
                              "simulatorId": "log-line-triage",
                              "completionCriteria": [
                                        "Complete the drill session",
                                        "Score at least 80%",
                                        "Review missed log patterns (auth vs kernel vs application)"
                              ],
                              "relatedTopicIds": [
                                        "logs",
                                        "troubleshooting"
                              ],
                              "order": 1
                    }
          ],
        },
        {
          id: "security-basics",
          name: "Security Basics",
          lesson: {
            title: "Linux Security Fundamentals",
            content: `Linux security combines access controls, network defenses, and system hardening. Principle of least privilege means granting only necessary permissions. Disable unused services, remove unnecessary packages, and apply security updates promptly through your package manager.

SSH (Secure Shell) provides encrypted remote administration on port 22. Harden SSH by disabling root login (PermitRootLogin no), using key-based authentication, changing the default port optionally, and limiting users with AllowUsers. Private keys stay on the client; public keys go in ~/.ssh/authorized_keys.

Host firewalls filter traffic—ufw on Ubuntu and firewalld on RHEL. SELinux (RHEL/Fedora) and AppArmor (Ubuntu/SUSE) provide Mandatory Access Control beyond standard permissions, enforcing policies on processes and files. Check SELinux status with getenforce; setenforce 0/1 toggles permissive/enforcing modes.

Audit authentication failures in /var/log/auth.log or /var/log/secure. Fail2ban automatically bans IPs after repeated failed login attempts. Regularly review user accounts, sudo access, SUID binaries (find / -perm -4000), and open ports (ss -tulpn) to maintain a secure baseline.

Hardening checklist: disable root SSH, enforce key auth, patch packages, configure host firewall default deny, audit SUID/SGID, and review cron/at jobs. SELinux enforcing vs permissive—getsebool, setsebool, restorecon fix context issues. AppArmor profiles on Ubuntu.

Public/private key pairs: id_rsa (private, client) vs id_rsa.pub (public, server authorized_keys). Fail2ban jails monitor auth logs. Open ports: ss -tulpn. GPG verifies package/repo trust—not the same as TLS certificates but related crypto hygiene.`,
          },
          keyFacts: [
            "SSH encrypts remote access; keys go in ~/.ssh/authorized_keys on the server",
            "PermitRootLogin no and key-based auth are essential SSH hardening steps",
            "ufw (Ubuntu) and firewalld (RHEL) manage host-based firewalls",
            "SELinux and AppArmor enforce Mandatory Access Control policies",
            "find / -perm -4000 locates SUID binaries that may pose security risks",
            "Apply updates regularly; disable unused services and remove unneeded packages",
          ],
          commonMistakes: [
            "Confusing SELinux enforcing vs permissive vs disabled modes",
            "Mixing up AppArmor with SELinux as different MAC frameworks",
            "Assuming firewalld and ufw cannot coexist without conflicts",
            "Forgetting SSH key-based auth is preferred over password authentication",
            "Believing root login via SSH should remain enabled for convenience",
          ],
          examTraps: [
            "PermitRootLogin no in sshd_config security hardening",
            "fail2ban vs firewalld vs iptables/nftables scope differences",
            "SELinux context ls -Z vs standard permissions ls -l",
            "Public key in authorized_keys vs private key on client",
            "chage -l password aging policy inspection",
          ],
          quiz: [
            {
              id: "security-basics-q1",
              prompt: "Where are SSH public keys placed to allow key-based login for a user?",
              choices: [
                { id: "a", text: "~/.ssh/id_rsa" },
                { id: "b", text: "~/.ssh/authorized_keys" },
                { id: "c", text: "/etc/ssh/keys" },
                { id: "d", text: "~/.ssh/known_hosts" },
              ],
              correctChoiceId: "b",
              explanation:
                "Public keys authorized for login are listed in the user's ~/.ssh/authorized_keys file.",
            },
            {
              id: "security-basics-q2",
              prompt: "Which SSH configuration directive disables direct root login?",
              choices: [
                { id: "a", text: "AllowRoot no" },
                { id: "b", text: "PermitRootLogin no" },
                { id: "c", text: "RootLogin disabled" },
                { id: "d", text: "DenyRoot yes" },
              ],
              correctChoiceId: "b",
              explanation:
                "PermitRootLogin no in /etc/ssh/sshd_config prevents direct SSH login as root.",
            },
            {
              id: "security-basics-q3",
              prompt: "Which MAC system is commonly used on RHEL and Fedora?",
              choices: [
                { id: "a", text: "AppArmor" },
                { id: "b", text: "SELinux" },
                { id: "c", text: "Grsecurity" },
                { id: "d", text: "Seccomp" },
              ],
              correctChoiceId: "b",
              explanation:
                "SELinux (Security-Enhanced Linux) provides mandatory access control on RHEL, Fedora, and CentOS.",
            },
            {
              id: "security-basics-q4",
              prompt: "Which command finds files with the SUID permission bit set?",
              choices: [
                { id: "a", text: "find / -perm -4000" },
                { id: "b", text: "find / -suid all" },
                { id: "c", text: "ls -suid /" },
                { id: "d", text: "chmod --list-suid" },
              ],
              correctChoiceId: "a",
              explanation:
                "find / -perm -4000 searches for files with the SUID bit, which run as the file owner.",
            },
            {
              id: "security-basics-q5",
              prompt: "What is the default port for SSH?",
              choices: [
                { id: "a", text: "21" },
                { id: "b", text: "22" },
                { id: "c", text: "23" },
                { id: "d", text: "443" },
              ],
              correctChoiceId: "b",
              explanation:
                "SSH listens on TCP port 22 by default for encrypted remote shell access.",
            },
          ],
          flashcards: [
            {
              id: "security-basics-f1",
              front: "SSH authorized keys file location?",
              back: "~/.ssh/authorized_keys",
            },
            {
              id: "security-basics-f2",
              front: "MAC system on RHEL/Fedora?",
              back: "SELinux",
            },
            {
              id: "security-basics-f3",
              front: "Default SSH port?",
              back: "22",
            },
            {
              id: "security-basics-f4",
              front: "SELinux mode enforcing temporarily?",
              back: "setenforce 1",
            },
            {
              id: "security-basics-f5",
              front: "List open listening ports?",
              back: "ss -tulpn",
            },
          ],
          objectives: ["XK0-005-2.3","XK0-005-2.4","XK0-005-2.5"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
                    {
                              "id": "security-basics-bank-q1",
                              "prompt": "AppArmor common on:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "RHEL only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "CentOS Stream only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ubuntu/Debian"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alpine only"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "AppArmor is widely used on Ubuntu derivatives."
                    },
                    {
                              "id": "security-basics-bank-q2",
                              "prompt": "Restore SELinux file context:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "chcon only permanent always"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "restorecon -Rv path"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "setenforce restore"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "audit2allow only without restorecon"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "restorecon applies default SELinux contexts."
                    },
                    {
                              "id": "security-basics-bank-q3",
                              "prompt": "SSH private key should have permissions:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "600"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "644"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "777"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "755"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Private keys must not be world-readable—typically chmod 600."
                    },
                    {
                              "id": "security-basics-bank-q4",
                              "prompt": "ufw default deny incoming example:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ufw open all"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "iptables flush only"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "firewall-cmd --panic"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ufw default deny incoming; ufw allow ssh"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "Default deny with explicit allow rules is best practice."
                    },
                    {
                              "id": "security-basics-bank-q5",
                              "prompt": "Fail2ban monitors which logs for SSH?",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/var/log/kern.log only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "auth.log or secure"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/var/log/dpkg.log"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/var/log/boot.log"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "Fail2ban parses authentication failure logs."
                    },
                    {
                              "id": "security-basics-bank-q6",
                              "prompt": "Disable a service account login shell:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "userdel"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "passwd -d"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "usermod -s /sbin/nologin user"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "chsh only without nologin"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "/sbin/nologin prevents interactive login."
                    },
                    {
                              "id": "security-basics-bank-q7",
                              "prompt": "Verify package signature on RPM:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "rpm -K package.rpm"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "rpm --nosignature"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "gpg --list only"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "sha1sum only"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "rpm -K checks package integrity and signature."
                    }
          ],

        },
      ],
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      topics: [
        {
          id: "troubleshooting",
          name: "Troubleshooting",
          lesson: {
            title: "Linux System Troubleshooting Methodology",
            content: `Effective Linux troubleshooting follows a structured approach: identify symptoms, gather information, form hypotheses, test systematically, and document findings. Start by checking what changed recently—updates, config edits, or new deployments often cause failures.

For boot issues, examine bootloader configs, kernel parameters, and filesystem errors. systemd-analyze blame shows slow-starting services. For service failures, run systemctl status and journalctl -u servicename for error messages. Verify config syntax before restarting—nginx -t and apachectl configtest validate web server configs.

Performance problems use top, htop, iotop, and vmstat to identify CPU, memory, and I/O bottlenecks. Network issues follow a layered approach: ip link confirms interfaces are up, ip addr verifies IP assignment, ping tests gateway reachability, and dig/nslookup checks DNS. ss or curl tests specific service ports.

Disk full errors require df -h to find full filesystems and du -sh to locate large directories. Permission denied errors trace through ls -l ownership, group membership, and ACLs. Reproduce issues in a test environment when possible, apply one fix at a time, and verify resolution before closing the incident.

Structured troubleshooting: reproduce, isolate, hypothesize, test, document. Boot problems: GRUB config, initramfs, filesystem fsck, journalctl -b -1 previous boot. Network: ping gateway, dig external name, curl service endpoint.

Performance: iostat, sar, free -h, vmstat, top. Permission denied: namei -l traces path permissions. Config validation before reload prevents outages—nginx -t, sshd -t. Combine log triage simulator results with journalctl searches for integrated review.`,
          },
          keyFacts: [
            "systemctl status and journalctl -u are first steps for failed services",
            "systemd-analyze blame identifies services slowing boot time",
            "Layered network checks: interface up → IP assigned → gateway → DNS → service port",
            "df -h finds full filesystems; du -sh locates space-consuming directories",
            "top, vmstat, and iotop diagnose CPU, memory, and I/O performance issues",
            "Change one variable at a time and verify fixes before closing incidents",
          ],
          commonMistakes: [
            "Jumping to complex fixes before checking logs and recent changes",
            "Confusing hardware failure symptoms with configuration errors",
            "Assuming reboot always fixes root cause without investigation",
            "Mixing up systematic approach (identify, isolate, resolve) with random guessing",
            "Forgetting to verify fix and document the incident",
          ],
          examTraps: [
            "First step is gather information—check logs, timeline, recent changes",
            "Boot into single-user/rescue mode for filesystem or password recovery",
            "Network unreachable vs name resolution failure diagnostic order",
            "Performance issue: check CPU, memory, disk I/O, and network in sequence",
            "Rollback recent change vs patch forward decision scenarios",
          ],
          quiz: [
            {
              id: "troubleshooting-q1",
              prompt: "What are the first two commands to diagnose a failed systemd service?",
              choices: [
                { id: "a", text: "ps aux and kill" },
                { id: "b", text: "systemctl status and journalctl -u" },
                { id: "c", text: "top and free" },
                { id: "d", text: "ifconfig and ping" },
              ],
              correctChoiceId: "b",
              explanation:
                "systemctl status shows service state and recent errors; journalctl -u provides detailed service logs.",
            },
            {
              id: "troubleshooting-q2",
              prompt: "Which command identifies services that slow system boot?",
              choices: [
                { id: "a", text: "systemd-analyze blame" },
                { id: "b", text: "bootchart" },
                { id: "c", text: "dmesg --boot" },
                { id: "d", text: "systemctl list-slow" },
              ],
              correctChoiceId: "a",
              explanation:
                "systemd-analyze blame lists services ordered by the time they took to start during boot.",
            },
            {
              id: "troubleshooting-q3",
              prompt: "A disk full error occurs. Which commands help identify the cause?",
              choices: [
                { id: "a", text: "free -h and top" },
                { id: "b", text: "df -h and du -sh" },
                { id: "c", text: "ping and traceroute" },
                { id: "d", text: "useradd and passwd" },
              ],
              correctChoiceId: "b",
              explanation:
                "df -h shows which filesystems are full; du -sh finds directories consuming the most space.",
            },
            {
              id: "troubleshooting-q4",
              prompt: "What is the recommended order for network connectivity troubleshooting?",
              choices: [
                { id: "a", text: "DNS → interface → gateway → IP" },
                { id: "b", text: "Interface up → IP assigned → gateway reachable → DNS → service port" },
                { id: "c", text: "Service port → DNS → ping → interface" },
                { id: "d", text: "Reboot → reinstall → replace hardware" },
              ],
              correctChoiceId: "b",
              explanation:
                "Layered troubleshooting starts at the physical/link layer and works up to application services.",
            },
            {
              id: "troubleshooting-q5",
              prompt: "Which tools help diagnose system performance bottlenecks?",
              choices: [
                { id: "a", text: "chmod and chown" },
                { id: "b", text: "top, vmstat, and iotop" },
                { id: "c", text: "useradd and groupadd" },
                { id: "d", text: "mkfs and mount" },
              ],
              correctChoiceId: "b",
              explanation:
                "top monitors processes, vmstat reports virtual memory statistics, and iotop tracks disk I/O by process.",
            },
          ],
          flashcards: [
            {
              id: "troubleshooting-f1",
              front: "Diagnose a failed systemd service?",
              back: "systemctl status + journalctl -u servicename",
            },
            {
              id: "troubleshooting-f2",
              front: "Find what's slowing boot?",
              back: "systemd-analyze blame",
            },
            {
              id: "troubleshooting-f3",
              front: "Disk full investigation commands?",
              back: "df -h and du -sh",
            },
            {
              id: "troubleshooting-f4",
              front: "Previous boot journal?",
              back: "journalctl -b -1",
            },
            {
              id: "troubleshooting-f5",
              front: "Trace path permission issues?",
              back: "namei -l /path/to/file",
            },
          ],
          objectives: ["XK0-005-4.2","XK0-005-4.4","XK0-005-4.5"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          questionBank: [
                    {
                              "id": "troubleshooting-bank-q1",
                              "prompt": "Validate nginx config syntax:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "nginx -t"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "systemctl test nginx"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "nginx --check only on all"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "journalctl nginx -t"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "nginx -t tests configuration before reload."
                    },
                    {
                              "id": "troubleshooting-bank-q2",
                              "prompt": "Test sshd config before restart:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ssh -t"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "sshd -t"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "systemctl test sshd"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ssh -C"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "sshd -t validates sshd_config syntax."
                    },
                    {
                              "id": "troubleshooting-bank-q3",
                              "prompt": "Memory usage summary:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "mem -h"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "vmstat only always"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "free -h"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "top -m only"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "free -h human-readable memory stats."
                    },
                    {
                              "id": "troubleshooting-bank-q4",
                              "prompt": "Disk I/O stats per device:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "df -i only"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "du -h"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "lsblk -io"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "iostat"
                                        }
                              ],
                              "correctChoiceId": "d",
                              "explanation": "iostat reports CPU and I/O utilization."
                    },
                    {
                              "id": "troubleshooting-bank-q5",
                              "prompt": "Identify process listening on port 80:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "ss -tulpn | grep :80"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ping :80"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "port 80"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "lsof only unavailable"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "ss -tulpn maps ports to processes."
                    },
                    {
                              "id": "troubleshooting-bank-q6",
                              "prompt": "GRUB config commonly at:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "/etc/init.d/grub"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "/etc/default/grub"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "/boot/grub only without etc"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "/var/grub"
                                        }
                              ],
                              "correctChoiceId": "b",
                              "explanation": "/etc/default/grub holds boot parameters on Debian/Ubuntu."
                    },
                    {
                              "id": "troubleshooting-bank-q7",
                              "prompt": "Single-user/rescue for root maintenance:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "graphical.target"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "halt.target"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "rescue.target"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "sleep.target"
                                        }
                              ],
                              "correctChoiceId": "c",
                              "explanation": "rescue.target provides minimal environment for repair."
                    },
                    {
                              "id": "troubleshooting-bank-q8",
                              "prompt": "Check DNS if ping IP works but name fails:",
                              "choices": [
                                        {
                                                  "id": "a",
                                                  "text": "dig/nslookup the hostname"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "reboot"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "fdisk -l"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "chmod DNS"
                                        }
                              ],
                              "correctChoiceId": "a",
                              "explanation": "Name resolution failure isolates DNS when IP connectivity succeeds."
                    }
          ],

        },
      ],
    },
  ],
};
