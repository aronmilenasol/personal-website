---
title: "How to use an old laptop or computer as a homelab"
date: "2025-07-26"
description: "If you have an old laptop or computer you’re no longer using, you can turn it into a homelab. In this post, I’ll tell you how I did it and share some ideas to make the most of it."
---

I had been wanting to start a homelab for a while, and it occurred to me that I could reuse an old laptop I had lying around unused for about ten years. Its main specifications are:

- **Model:** Asus X555LAB (2015)
- **CPU:** Intel Core i3-5010U (dual-core, 2.00GHz)
- **RAM:** 4GB DDR3
- **Storage:** 1TB SSD

Any computer can serve as a homelab. It's a great way to give our devices a second (or even third) life instead of wasting them.

## Homelab use cases

You can use it to:

- Install a Linux server (for example, Ubuntu Server or Fedora Server)
- Learn about Docker and run containers
- Set up Prometheus + Grafana for monitoring
- Create and test your own automation scripts in Bash or Python

In my case, I started by:

- Installing Ubuntu Server
- Configuring Netplan to get connectivity via USB tethering to install network drivers and then connect to Wi-Fi
- Running containers with Docker
- Deploying a monitoring stack with Prometheus + Grafana

In my [homelab repository](https://github.com/aronmilenasol/homelab) (a work in progress, but growing week by week), you can find ideas that might be useful if you're interested in building your own DevOps and/or SRE "lab".

## Alternatives to avoid depending on the terminal

You don’t have to use a Linux distribution designed strictly as a server. You can take advantage of lightweight desktop environments with a GUI, such as Lubuntu or Debian with XFCE or LXDE.

However, keep in mind that one of the benefits of not using a graphical interface is lower resource consumption. So if your hardware is limited, it's probably best to use a Linux distribution without a GUI.

## SSH connection

If using the machine physically is inconvenient for some reason, you can connect to it from your main computer using SSH.

In my case, the laptop I use as a homelab no longer has a battery (it had swollen and I had to remove it), and the keyboard stopped working properly. Also, its screen resolution feels uncomfortable compared to my current laptop. That’s why I prefer connecting via SSH: I can still use the hardware without sacrificing comfort.

## Conclusion

Next time you have a laptop or computer you’re no longer using, think twice before throwing it away or giving it away — it might be perfect for a homelab. This way, its useful life is extended, and you get an environment to practice and experiment freely.
