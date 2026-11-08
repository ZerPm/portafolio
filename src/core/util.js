import {
  createIcons, Menu, Workflow, BadgeCheck, GraduationCap, Languages, Network, HardDrive, Sparkles, BookOpen,
  MessageSquare, Mail, Linkedin, Github, ArrowUpRight, Copy, X, FileText, LifeBuoy, Cloud, Bot, Layers, CalendarClock,
  Webhook, Rss, Merge, Filter, Split, CodeXml, Database, Globe, ShieldCheck, Ticket, ListChecks, Send, Rocket,
  ScanText, Megaphone, Radar, Zap, Bell, ArrowRight, Award, Check, Lock, Headset, ClipboardList, Briefcase, Target, User
} from 'lucide';

const icons = {
  Menu, Workflow, BadgeCheck, GraduationCap, Languages, Network, HardDrive, Sparkles, BookOpen, MessageSquare, Mail,
  Linkedin, Github, ArrowUpRight, Copy, X, FileText, LifeBuoy, Cloud, Bot, Layers, CalendarClock, Webhook, Rss, Merge,
  Filter, Split, CodeXml, Database, Globe, ShieldCheck, Ticket, ListChecks, Send, Rocket, ScanText, Megaphone, Radar,
  Zap, Bell, ArrowRight, Award, Check, Lock, Headset, ClipboardList, Briefcase, Target, User
};

export const paintIcons = () => createIcons({ icons });
export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];
export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const withTransition = (fn) => (document.startViewTransition && !reduced ? document.startViewTransition(fn) : fn());

/** Cabecera estándar de cada vista. */
export const viewHead = (num, title, sub) => `
  <header class="section__head reveal">
    <span class="section__num">${num}</span>
    <h1 class="section__title" tabindex="-1">${title}</h1>
    <p class="section__sub">${sub}</p>
  </header>`;
