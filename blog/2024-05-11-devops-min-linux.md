---
slug: devops-min-linux
title: DevOps Minimum - Linux
authors: [flaviusd]
tags: [devops]
---

### DevOps Minimum — Linux

This is my take on what you should minimum know about Linux to become a DevOps Engineer.

![](https://cdn-images-1.medium.com/max/800/1*HwCOJC9wXOZBgnj4KxJjZQ.png)This is my take on what you should minimum know about Linux to become a DevOps Engineer.

1. **Linux File System and Structure**

**Root Directory**: Understand the importance and structure of the root (`/`) directory and subdirectories like `/etc/`, `/var/`, `/home/`, and `/bin/`.

**File Types**: Recognize standard file types, such as regular files, directories, symbolic links, and device files.

**Paths and the PATH variable**: Whenever you are navigating the filesystem you can use absolute paths and relative paths. You can use the `pwd` command to understand where you are:


```
pwd  
# output  
/Users/flavius/Workspace/example  
  
ls  
# files/directories in the current directory  
a   b   c   dir
```
If for example, I would like to go to the `dir` directory I could either use the absolute path or the relative one:


```
# Relative Path  
cd dir  
  
# Absolute Path  
cd /Users/flavius/Workspace/example/dir
```
The `PATH` variable, is not a relative or absolute path, it is a crucial environment setting in Linux, determining where the system searches for executable files.


```
# Example setting of the PATH variable  
export PATH=$PATH:/new/directory/path
```
**File Permissions**: Grasp the concepts of user, group, and other permissions, along with commands like `chmod`, `chown`, and `chgrp`. Before jumping into examples for these commands, let’s deep dive into permissions.


```
ls -la  
  
drwxr-xr-x    6 flavius  staff   192 Aug 27 15:42 .  
drwxr-xr-x  127 flavius  staff  4064 Aug 27 15:42 ..  
-rw-r--r--    1 flavius  staff     0 Aug 27 15:42 a  
-rw-r--r--    1 flavius  staff     0 Aug 27 15:42 b  
-rw-r--r--    1 flavius  staff     0 Aug 27 15:42 c  
drwxr-xr-x    2 flavius  staff    64 Aug 27 15:42 dir
```
By using the `ls -la` option, you can easily spot all files and directories in the current directory (including hidden ones) and their permissions.   
Their permissions are the ones that start at the beginning of a line. If permissions start with a “d”, that means the structure is a directory.  
Let’s see what the other letters stand for: “r” → read, “w” → write, and “x” → execute.

Take a look at an example, and analyze the following permission that the `a` file has: `rw-r--r--.` As you can see, there are 9 characters in there.

* The first three are the permissions the **owner** of the file has: `rw-`
* The next three are the permissions of the **group** in which the owner of the file is: `r--`
* The last three are the permissions **other** users have: `r--`

Now, bear with me, because we are going to involve some simple math to make changing permissions easier. If you see a letter in one of these 3 places, that means a bit is enabled and has a value of 1 (in binary), otherwise, it is disabled and has a value of 0.

Let’s take a couple of examples to make things easy to understand:

* `r--` translates to 100 (in binary)
* `rw-` translates to 110 (in binary)
* `r-x` translate to 101 (in binary)

To translate a number from binary to decimal, the easiest way to do it is to start from the right to the left, multiply powers of 2, and add them together like follows:

* 100 → 0 \* 2⁰ + 0 \* 2¹+ 1 \* 2² = 0 + 0 + 4 = 4
* 110 → 0 \* 2⁰ + 1 \* 2¹ + 1 \* 2² = 0 + 2 + 4 = 6

Basically, to make it as simple as possible, if read is enabled, it has a value of 4, if write is enabled it has a value of 2 and if execute is enabled it has a value of 1.

Now, let’s get back to our `a` file with its `rw-r--r--` permissions.

Let’s suppose you want to give write permissions to the group, you can do that with:

```
# g+w translates to group gets write permissions  
chmod g+w a  

# using numbers (the first number corresponds to the owner, the second to the group, the third to others)
chmod 664 a
```
If you want to give full permissions, you could:


```
# Everyone had read, now we give to everyone write and execute permissions  
chmod ugo+wx a  
  
# using numbers  
chmod 777 a
```
2. **Command-Line Basics**

* **Fundamentals**: `ls`, `cd`, `cat`, `echo`, `mkdir`, `rm`
* **File Operations**: `cp`, `mv`, `find`, `tar`, and `zip` for handling and finding files.
* **Text Manipulation**: `grep`, `awk`, `sed`, and `cut` are invaluable for text processing.
* **Network Utilities**: `netstat`, `ifconfig` (or `ip`), `curl`, and `ping` are crucial for troubleshooting.


```
# List the contents of the current directory in a long listing format  
ls -l  
  
# List the contents of the current directory including hidden files or directories  
ls -la  
  
# Navigate to the 'documents' directory located in the 'user' home directory  
cd /home/user/documents  
  
# Go to the previous directory  
cd ..  
  
# Display the content of 'filename.txt' on the screen  
cat filename.txt  
  
# Display the phrase "Hello, World!" on the screen  
echo "Hello, World!"  
  
# Create a new directory named 'new_directory' in the current location  
mkdir new_directory  
  
# Delete the file named 'file_to_delete.txt'  
rm file_to_delete.txt  
  
# Recursively delete 'directory_to_delete' and all its contents (use with caution)  
rm -r directory_to_delete  
  
# Copy the file 'source.txt' to 'destination.txt'  
cp source.txt destination.txt  
  
# Move (or rename) the file 'oldname.txt' to 'newname.txt'  
mv oldname.txt newname.txt  
  
# Search for files in the '/home/user' directory with the name 'target.txt'  
find /home/user -name target.txt  
  
# Create a compressed archive named 'backup.tar.gz' of the 'backup' directory  
tar -czvf backup.tar.gz backup/  
  
# Create a compressed archive named 'archive.zip' containing the files 'file1.txt' and 'file2.txt'  
zip archive.zip file1.txt file2.txt  
  
# Search for the pattern "example" in 'filename.txt'  
grep "example" filename.txt  
  
# Print the second column of a file separated by commas  
awk -F ',' '{print $2}' filename.txt  
  
# Replace the first instance of the word "apple" with "orange" in 'filename.txt' and display the result  
sed 's/apple/orange/' filename.txt  
  
# Extract the third column of a file separated by colons  
cut -d ':' -f 3 filename.txt  
  
# Display all active network connections  
netstat -a  
  
# Display the configuration of all network interfaces  
ifconfig  
  
# Show information for all network interfaces  
ip addr show  
  
# Fetch the content of a website  
curl www.example.com  
  
# Send echo request packets to a domain to test connectivity  
ping www.example.com
```
3. **Package Management**

Different Linux distributions have their own package managers. Familiarize yourself with at least one of the following:

* Debian/Ubuntu: `apt-get` or `apt`
* RedHat/CentOS: `yum` or `dnf`
* SUSE: `zypper`


```
# Installs a package.  
apt-get/yum/dnf/zypper install package_name  
  
# Removes a package.  
apt-get/yum/dnf/zypper remove package_name  
  
# Update packages  
apt-get/yum/dnf/zypper update
```
4. **Process Management**

It’s important to understand how to list, kill, and prioritize processes using commands and tools like `ps`, `top`, `htop`, and `kill`.


```
# Display a snapshot of the current processes  
ps aux  

```
5. **VI**

VI is a text editor available by default on almost every UNIX system and has been a staple of system administration for decades.

It has different modes, but the most relevant are:

* Normal Mode → You start in this mode. It allows navigation, deletion, copying, and other text manipulation.
* Insert Mode → Adding New Text
* Command Mode → Save, Quit, etc


```
# Open a file named example.txt with vi (the file gets created if it doesn't exist)  
vi example.txt  

```
6. **User and Group Management**

Be comfortable adding, deleting, and modifying users and groups (`useradd`, `usermod`, `groupadd`, etc.) and understand the `/etc/passwd` and `/etc/group` files.


```
# Add a new user named 'newuser' with a home directory  
useradd -m newuser  
  
# Modify 'newuser' to have the login shell as /bin/tcsh  
usermod -s /bin/tcsh newuser  
  
# Add a new group named 'newgroup'  
groupadd newgroup  
  
# Add 'newuser' to the 'newgroup'  
usermod -aG newgroup newuser
```
7. **Shell Scripting**

Basic proficiency in scripting, using `bash`, can automate many tasks. You should know how to use variables, loops, and conditional statements.

This [tutorial](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/) is great for learning bash.

8. **Root and sudo**

The `root` user refers to the superuser or the administrator user of a system and has unrestricted access to all commands, files, and directories. Given the absolute power of the `root` account, it can be dangerous as a small mistake as `root`, can lead to data loss or system unavailability. Additionally, if attackers gain access to the `root` account, they can exploit the system entirely.

This is where `sudo` comes into play.

`sudo` stands for **superuser do**. It's designed to allow a permitted user to execute a command as the superuser (or another user, as specified in the `sudoers` file) without switching to that user account.

Using `sudo` typically prompts a user password verification, a checkpoint that ensures intentional privilege escalation.

The `/etc/sudoers` file is `sudo`'s backbone, dictating its permissions. And a pro tip for those modifying its settings: always use the `visudo` command to ensure error-free edits.


```
# Elevate privileges for a command:  
sudo <command>  
  
# Editing sudo configuration safely:  
sudo visudo
```

9. **Logging**

Understand where log files are typically stored (`/var/log/`) and tools that can assist in reading them, like `less`, `tail`, `head`.


```
# View contents of a file.txt with navigation capabilities  
less file.txt  
  
# Display the last 10 lines of file.txt  
tail file.txt  
  
# Display the first 10 lines of file.txt  
head file.txt  
  
# Display the last 5 lines of file.txt  
tail -n 5 file.txt  
  
# Display the first 5 lines of file.txt  
head -n 5 file.txt
```
10. **Networking Basics**

Understand basic networking concepts like IP addressing, subnets, ports, and protocols. You can check out this [tutorial](https://www.softwaretestinghelp.com/computer-networking-basics/), for more info.

Know how to configure and manage network interfaces, routes, and firewall rules. Tools and files like `/etc/network/interfaces`, `iptables` might come into play here.

11. **Secure Shell (SSH**)
SSH is fundamental for remote management. Know how to use `ssh` for remote login, `scp` for file transfer, and concepts about SSH keys.

You can generate a ssh key by using the `ssh-keygen` command. This will create a directory called `.ssh` and two keys inside of it(a public one and a private one).

If you are accepting the default values, the names of those keys will be `id_rsa` and `id_rsa.pub`.

Now that you have your keys created, you are ready to connect to a remote server. On the remote server, in the `.ssh` directory, a special file called `authorized_keys` can be created, and if you add the contents of your public key there, you will be able to connect to it by using your private key.

If you are using the default names, you won’t need to specify the path to the private key, but otherwise, this is a must:

`ssh -i path_to_private_key user@server`

12. **Disk and Storage**
It’s import to know how you can view disk usage (`df`, `du`), manage partitions and filesystems (`fdisk`, `mkfs`), and mount/unmount storage devices.

```
# Display the amount of disk space used and available on mounted filesystems  
df -h  
  
# Estimate file space usage for example_dir
du -sh example_dir/

# Display the sizes of files and directories within example_dir
du -ah example_dir/
```

Linux is really important, and understanding how to navigate the filesystem, permissions, how to remotely connect to servers, scripting in bash, and using vi is mandatory to become a DevOps Engineer.

In the next post, I will talk about scripting with Python and Golang so stay tuned.