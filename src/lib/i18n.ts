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
    archived: string;
  };
  about: {
    title: string;
    greeting: string;
    intro1: string;
    intro2: string;
    interests: string;
    learning: string;
    learningItems: string[];
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
      resume: "Resume",
    },
    home: {
      name: "曾政",
      roleLine: "Agent Product Manager | Enterprise Platform | Enterprise AI",
      expLine: "2 Years of Product Experience | @Xiaomi EV",
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
      archived: "archived",
    },
    about: {
      title: "About",
      greeting: "Hi, I'm Zheng.",
      intro1:
        "I'm an AI Product Manager building enterprise AI products at Xiaomi EV. I focus on making AI practical and useful for engineering teams.",
      intro2:
        "Currently, I spend my time thinking about how AI can transform enterprise workflows — not through flashy demos, but through products that people actually use every day.",
      interests: "Currently interested in",
      learning: "Currently learning",
      learningItems: [
        "Advanced agent architectures and multi-agent systems",
        "MCP protocol and tool-use patterns",
        "Building production RAG systems",
      ],
    },
    resume: {
      title: "Resume",
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
      about: "关于",
      resume: "简历",
    },
    home: {
      name: "曾政",
      roleLine: "Agent 产品经理 | 企业平台产品 | 企业AI",
      expLine: "2年产品经验 | @小米汽车",
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
      archived: "已归档",
    },
    about: {
      title: "关于",
      greeting: "你好，我是曾政。",
      intro1:
        "我是小米汽车的 AI 产品经理，专注于构建企业级 AI 产品。我致力于让 AI 在工程团队中变得实用且好用。",
      intro2:
        "目前，我主要思考 AI 如何改变企业工作流——不是通过炫酷的 Demo，而是通过人们每天真正使用的产品。",
      interests: "目前感兴趣的方向",
      learning: "正在学习的内容",
      learningItems: [
        "高级 Agent 架构与多 Agent 系统",
        "MCP 协议与工具调用模式",
        "构建生产级 RAG 系统",
      ],
    },
    resume: {
      title: "简历",
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
