---
title: "Socat: A Versatile Tool for Network Communication"
description: "Learn how to use Socat for network communication, port forwarding, tunneling, and security testing"
pubDate: "Nov 23 2026"
---

## What is socat ?

Socat ( short for SOcket CAT ) is a command line utility used for bidirectional data transfer between two data streams or endpoints. It can connect / transfer data between any kind of data channels such as sockets, pipes, files, serial ports or programs.

## Installation

Socat works across multiple operating system especially POSIX / UNIX based systems. In Windows you can use socat either using WSL or can run inside. Another alternative method is to use Go port of [socat](https://github.com/oittaa/socat/) ( Not Recommended ).

You can install socat in Mac using homebrew and their respective package manager in Linux distros.

#### Debian

To install socat on debian based distros run

```bash
sudo apt install socat
```

#### Arch Linux

You can install socat in Archlinux using pacman

```bash
sudo pacman -S socat
```

#### RHEL / Fedora / Rocky

To install socat on Fedora / Red Hat based distributions

```bash
sudo dnf install socat
```

## Socat syntax

In this section we will look at socat's command syntax, its available usage and some practical examples.

```bash
socat [options] <address1> <address2>
```

Socat takes two addresses as main argument that represents the endpoint between which data is transfered.
Global options are specified before the addresses and those are applied for the whole connection.

Each address are in format similar to:
```bash
TYPE:parameters,options
```

* **TYPE**: It specify the type of address such as TCP, UDP, TCP-LISTEN, or FILE etc.
* **Paramenters**: Provide required details for the address such as IP Adress, Port number or file path.
* **Options**: Its used to configure the behavior of a specific address.

<br>

### Global Options

Global options controls the overall behavior of socat. That includes logging, debugging and data transfer.

|Option|Description                                                     |
|------|----------------------------------------------------------------|
|-d    |Displays diagnostic messages, Repeat to increase the verbosity  |
|-v    |Displays transfered data in readable format                     |
|-x    |Displays transfered data in hexadecimal format                  |
|-u    |Enable unidirectional data transfer from first address to second|
|-U    |Enable unidirectional data transfer from second address to first|
|-4    |Use IPv4 when address don't specify IP version                  |
|-6    |Use IPv6 when address don't specify IP version                  |

<br>

### Address Types

Socat works with different types of addresses that allows it to communicate with different endpoints, network sockets, files and processes.

|Address Type |Description                                            |
|-------------|-------------------------------------------------------|
|TCP:         |Establishes a TCP connection to the endpoint           |
|UDP:         |Establishes a UDP connection to the endpoint           |
|TCP-LISTEN:  |Creates a TCP listening socket                         |
|UDP-LISTEN:  |Creates a UDP listening socket                         |
|OPENSSL:     |Establishes connection using SSL/TLS                   |
|FILE:        |Reads from or write to files                           |
|EXEC:        |Executes a program and communicate through standard I/O|
|SYSTEM:      |Run a command through Shell                            |
|UNIX-CONNECT:|Connects to UNIX Domain socket                         |
|UNIX-LISTEN: |Listens to UNIX Domain socket                          |

<br>

### Address Options

Address specific options are used to configure induvidual endpoints.

|Option   |Description                                      |
|---------|-------------------------------------------------|
|fork     |Create child process for each incoming connection|
|bind     |Specifies the local IP address to bind the socket|
|keepalive|Enable TCP keepalive on socket                   |
|reuseaddr|Allows local socket address to be reused         |

<br>

### Socat Usage Examples

<br>

#### 1. TCP Server & Client

In this example we will see how we can create a simple TCP server and transfer data with it using a client, both will be created using socat.

**Terminal 1 - TCP Server**
```bash
socat TCP-LISTEN:8080,reuseaddr STDIO
```
***Note**: STDIO as address means it will use standard input and out of terminal and will use it as endpoint.*

This will start a TCP server that will listen to TCP requests on port 8080.

**Terminal 2 - TCP Client**

```bash
socat TCP:localhost:8080 -
```

***Note**: - as address is same as STDIO*

This will be acting as TCP client and will make connection to TCP  server.

#### 2. UDP Communication

In this example we will use socat to communicate using UDP protocol.
