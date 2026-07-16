export type Locale = "en" | "zh";

export interface Translations {
  nav: {
    projects: string;
    writing: string;
    playground: string;
    about: string;
    resume: string;
  };
  home: {
    name: string;
    roleLine: string;
    expLine: string;
    tagline: string;
    viewProjects: string;
    selectedWork: string;
  };
  projects: {
    title: string;
    description: string;
    allProjects: string;
    backToProjects: string;
  };
  writing: {
    title: string;
    description: string;
    allWriting: string;
  };
  playground: {
    title: string;
    description: string;
    live: string;
    experiment: string;
    building: string;
    archived: string;
  };
  about: {
    title: string;
    philosophy: string;
    philosophyItems: string[];
    currently: string;
    currentlyItems: string[];
    connect: string;
  };
  resume: {
    title: string;
    description: string;
    experience: string;
    coreSkills: string;
    downloadPdf: string;
  };
  footer: {
    builtWith: string;
  };
  theme: {
    toggle: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      projects: "Projects",
      writing: "Writing",
      playground: "Playground",
      about: "About",
      resume: "Experience",
    },
    home: {
      name: "Zoe Zeng",
      roleLine: "Agent Product Manager | Enterprise Platform | Enterprise AI",
      expLine: "2 Years of Product Experience | Xiaomi EV",
      tagline: "Building AI Products for Enterprise Workflows.",
      viewProjects: "View Projects",
      selectedWork: "Selected Work",
    },
    projects: {
      title: "Projects",
      description:
        "Case studies from building AI products for enterprise workflows.",
      allProjects: "All Projects",
      backToProjects: "All Projects",
    },
    writing: {
      title: "Writing",
      description:
        "Thoughts on AI products, workflow design, and developer tools.",
      allWriting: "All Writing",
    },
    playground: {
      title: "Playground",
      description: "Things I'm exploring, building, and breaking.",
      live: "live",
      experiment: "experiment",
      building: "building",
      archived: "archived",
    },
    about: {
      title: "About",
      philosophy: "How I Think",
      philosophyItems: [
        "The best AI products are invisible — they just work.",
        "Start from your own pain points, not from what AI can do.",
        "A 70% solution that integrates with existing workflows beats a 99% standalone tool.",
        "Trust is earned through transparency, not accuracy.",
      ],
      currently: "Currently",
      currentlyItems: [
        "Building enterprise AI agents that actually get used",
        "Exploring how agents can talk to each other across systems",
        "Learning to ship faster with AI-assisted development",
        "Reading about how other companies are deploying AI at scale",
      ],
      connect: "Let's Connect",
    },
    resume: {
      title: "Experience",
      description: "My professional journey and capabilities.",
      experience: "Experience",
      coreSkills: "Core Skills",
      downloadPdf: "PDF",
    },
    footer: {
      builtWith: "Built with Next.js.",
    },
    theme: {
      toggle: "Toggle theme",
    },
  },
  zh: {
    nav: {
      projects: "项目",
      writing: "博客",
      playground: "实验室",
      about: "关于我",
      resume: "经历",
    },
    home: {
      name: "曾政",
      roleLine: "Agent 产品经理 | 企业平台产品 | 企业AI",
      expLine: "2年产品经验 | 小米汽车",
      tagline: "构建 AI 产品赋能企业工作流。",
      viewProjects: "查看项目",
      selectedWork: "精选项目",
    },
    projects: {
      title: "项目",
      description: "构建企业级 AI 产品的案例研究。",
      allProjects: "所有项目",
      backToProjects: "所有项目",
    },
    writing: {
      title: "博客",
      description: "关于 AI 产品、工作流设计和开发者工具的思考。",
      allWriting: "所有文章",
    },
    playground: {
      title: "实验室",
      description: "我正在探索、构建和尝试的东西。",
      live: "进行中",
      experiment: "实验中",
      building: "开发中",
      archived: "已归档",
    },
    about: {
      title: "关于我",
      philosophy: "我的产品观",
      philosophyItems: [
        "最好的 AI 产品是隐形的——它只是好用。",
        "从自己的痛点出发，而不是从 AI 能做什么出发。",
        "一个能融入现有工作流的 70 分方案，比一个 99 分的独立工具更有价值。",
        "信任来自透明，而不是准确率。",
      ],
      currently: "目前在做",
      currentlyItems: [
        "构建真正被使用的企业 AI Agent",
        "探索 Agent 之间如何跨系统互通",
        "用 AI 辅助开发来提升自己的交付速度",
        "研究其他公司如何在大规模场景下部署 AI",
      ],
      connect: "联系我",
    },
    resume: {
      title: "个人经历",
      description: "我的职业经历与核心能力。",
      experience: "工作经历",
      coreSkills: "核心技能",
      downloadPdf: "下载 PDF",
    },
    footer: {
      builtWith: "使用 Next.js 构建。",
    },
    theme: {
      toggle: "切换主题",
    },
  },
};
