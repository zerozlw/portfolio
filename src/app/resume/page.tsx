"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ResumePage() {
  const { locale, t } = useLanguage();

  return (
    <section className="pt-28 pb-32">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-[42rem]">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-foreground">
                  {t.resume.title}
                </h1>
                <p className="mt-4 text-lg text-muted">
                  {t.resume.description}
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Download size={14} />
                {t.resume.downloadPdf}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeInSection>
          <div className="mx-auto max-w-[42rem]">
            {locale === "en" ? <EnContent /> : <ZhContent />}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted/60">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ExperienceCard({
  company,
  role,
  period,
  children,
}: {
  company: string;
  role: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <span className="font-medium text-foreground">{company}</span>
          <span className="ml-2 text-sm text-muted">— {role}</span>
        </div>
        <span className="flex-shrink-0 text-xs text-muted/60">{period}</span>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-md bg-muted/10 px-3 py-1.5 text-xs font-medium text-muted">
      {label}
    </span>
  );
}

function EnContent() {
  return (
    <>
      <Section title="Summary">
        <p className="text-sm leading-relaxed text-muted">
          2 years of product management experience with background in AI products, enterprise digital platforms, and automotive R&D. Led Xiaomi EV&apos;s Parts R&D Platform (DV, EA, TKO), covering R&D, test verification, and supplier collaboration. Continuously exploring LLM applications in enterprise efficiency — built AI Agent, knowledge base, NL query, CLI capabilities, achieving <strong className="text-foreground">60%+ efficiency improvement in R&D operations</strong> and <strong className="text-foreground">100x+ speedup in complex data queries</strong>. Strong technical aptitude with hands-on SQL, Python, and AI prototyping skills.
        </p>
      </Section>

      <Section title="Experience">
        <ExperienceCard company="Xiaomi EV" role="Product Manager (Platform & AI)" period="2024.06 — Present">
          <p className="mb-3">Leading supplier digitization, parts R&D platform, and AI Agent development, serving R&D, test verification, and supplier teams. Driving R&D process digitalization and AI intelligence.</p>

          <p className="mb-1 font-medium text-foreground text-xs uppercase tracking-wider">Enterprise Platform — R&D Process Optimization</p>
          <BulletList items={[
            'Built standardized R&D template system, abstracting expert knowledge into platform rules, covering <strong class="text-foreground">200+ part categories</strong> and <strong class="text-foreground">95% of common R&D scenarios</strong>, improving cross-project experience reuse efficiency.',
            'Redesigned test verification document lifecycle (create → approve → archive), covering core processes. Processing time reduced from <strong class="text-foreground">15 days to 3 days</strong>.',
            'Built engineering approval automation, integrating external system data. Supported <strong class="text-foreground">5 vehicle models</strong> and <strong class="text-foreground">360 engineering approvals</strong>, reducing cross-team communication costs.',
            'Established standardized R&D-supplier collaboration mechanism, supporting <strong class="text-foreground">350 suppliers</strong> online collaboration, improving data flow efficiency and compliance.',
          ]} />

          <p className="mb-1 mt-4 font-medium text-foreground text-xs uppercase tracking-wider">AI Agent Development</p>
          <BulletList items={[
            '<strong class="text-foreground">AI Agent</strong>: Designed and launched IDP Agent — system debug, knowledge Q&A, DB query, data analysis across high-frequency scenarios. Integrated into Feishu bot for team-wide use. Data query time reduced from <strong class="text-foreground">20-30 minutes to ~15 seconds</strong>.',
            '<strong class="text-foreground">AI Workflow</strong>: Abstracted R&D troubleshooting into standardized workflow, built AI-assisted troubleshooting capability. Product maintenance reduced from <strong class="text-foreground">1.5-2 days/week to 0.5-1 day/week</strong>, overall efficiency <strong class="text-foreground">60%+</strong>.',
            '<strong class="text-foreground">Developer Productivity</strong>: Designed and shipped <strong class="text-foreground">106 CLI commands</strong>, packaging high-frequency capabilities (part query, test report upload) as developer tools, improving daily R&D operational efficiency.',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Monica.ai" role="AI Tool Product Manager (Intern)" period="2023.11 — 2024.03">
          <p className="mb-3">User research, product analysis, and feature design for overseas AI browser extension.</p>
          <BulletList items={[
            'Led full-cycle user research: audience segmentation, online interviews, and result synthesis. Distributed <strong class="text-foreground">20,000 surveys</strong>, received <strong class="text-foreground">187 active user responses</strong>; conducted <strong class="text-foreground">11 deep interviews</strong> with overseas users, identified core non-paying user needs and defined homepage quick-start strategy.',
            'Built product experience analytics metrics and needs analysis funnel, driving optimizations in language translation, quick toolbar, and PDF reader. After launch, uninstall rate dropped from <strong class="text-foreground">36.47% to 18.1%</strong>, next-day retention rose from <strong class="text-foreground">7.25% to 9.50%</strong>.',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Momenta" role="Autonomous Driving Tool PM (Intern)" period="2022.10 — 2023.05">
          <p className="mb-3">Product manager for autonomous driving data platform Mviz and tool platform.</p>
          <BulletList items={[
            'Collaborated with perception algorithm R&D and simulation teams, analyzed user behavior and requirements. Enhanced Mviz custom configuration, plugin platform capabilities, and team collaboration. Delivered <strong class="text-foreground">15+ features</strong>, <strong class="text-foreground">1,200+ users</strong> issue diagnosis efficiency improved <strong class="text-foreground">10x</strong> (diagnosis time from hour-level to <strong class="text-foreground">0.4~0.6 min</strong>).',
            'Independently built simulation data visualization comparison feature, significantly reducing user operation difficulty. Became a commonly used feature for <strong class="text-foreground">500+ downstream users</strong> in simulation scenarios.',
            'Deeply participated in building permission management system and plugin release platform from scratch, enabling business decoupling. Proactively implemented task resource allocation mechanism, ensuring data security and privacy, with data package processing time under <strong class="text-foreground">10 min</strong>.',
          ]} />
        </ExperienceCard>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          <SkillTag label="Enterprise Digital Platform" />
          <SkillTag label="SaaS Products" />
          <SkillTag label="Process Design" />
          <SkillTag label="Data Analysis" />
          <SkillTag label="User Research" />
          <SkillTag label="AI Agent" />
          <SkillTag label="Prompt Engineering" />
          <SkillTag label="Workflow Design" />
          <SkillTag label="Enterprise AI" />
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">Wuhan University of Technology</span>
              <span className="text-xs text-muted/60">2021 — 2024</span>
            </div>
            <p className="text-sm text-muted">M.S. Information & Interaction Design · GPA 3.8/4.0</p>
            <p className="text-xs text-muted/60">Core: User Experience, Service Design, HCI Research</p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">Chongqing University</span>
              <span className="text-xs text-muted/60">2018 — 2019</span>
            </div>
            <p className="text-sm text-muted">Exchange Student (Computer Science) · Top 5%</p>
            <p className="text-xs text-muted/60">Core: Data Structures, Algorithm Analysis, Image Processing</p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">Central South University for Nationalities</span>
              <span className="text-xs text-muted/60">2017 — 2021</span>
            </div>
            <p className="text-sm text-muted">B.S. Computer Science · Rank 4/158</p>
            <p className="text-xs text-muted/60">Outstanding Student · 4-year National & University Scholarship</p>
          </div>
        </div>
      </Section>
    </>
  );
}

function ZhContent() {
  return (
    <>
      <Section title="个人简介">
        <p className="text-sm leading-relaxed text-muted">
          2 年产品经理经验，拥有 AI 产品、企业数字化平台及汽车研发业务背景。负责小米汽车零部件研发平台（DV、EA、TKO）建设，覆盖研发、测试验证及供应商协同等业务场景。持续探索 LLM 在企业效率场景中的落地，主导 AI Agent、知识库、数据库自然语言查询、CLI 等能力建设，实现<strong className="text-foreground">研发运维效率提升 60%+</strong>、<strong className="text-foreground">复杂数据查询效率提升 100 倍以上</strong>。具备较强技术理解能力，可独立完成 SQL、Python 验证及 AI Demo 搭建。
        </p>
      </Section>

      <Section title="工作经历">
        <ExperienceCard company="小米汽车" role="产品经理（平台 & AI）" period="2024.06 — 至今">
          <p className="mb-3">负责供应商数字化、零部件研发数字化平台及 AI Agent 建设，服务研发、测试验证、供应商等业务，推动研发流程数字化与 AI 智能化。</p>

          <p className="mb-1 font-medium text-foreground text-xs uppercase tracking-wider">企业平台建设，研发流程效率优化</p>
          <BulletList items={[
            '建设标准化研发模板体系，将专家经验抽象为平台规则，覆盖 <strong class="text-foreground">200+ 类零件</strong>、<strong class="text-foreground">95% 常见研发场景</strong>，提高跨项目经验复用效率。',
            '重构测试验证文件全生命周期流程，覆盖创建、审批、归档等核心环节，处理周期由 <strong class="text-foreground">15 天缩短至 3 天</strong>。',
            '建设工程认可自动化能力，打通外部系统数据，累计支撑 <strong class="text-foreground">5 款车型</strong>、<strong class="text-foreground">360 次工程认可</strong>，降低跨团队沟通成本。',
            '建立研发与供应商标准化协同机制，支撑 <strong class="text-foreground">350 家供应商</strong>在线协作，提高数据流转效率及合规性。',
          ]} />

          <p className="mb-1 mt-4 font-medium text-foreground text-xs uppercase tracking-wider">AI Agent 建设</p>
          <BulletList items={[
            '<strong class="text-foreground">AI Agent</strong>：主导设计并上线 IDP Agent，围绕系统 Debug、知识问答、数据库查询、数据分析等高频场景设计 AI 能力，并接入飞书机器人，实现团队共享使用，其中查询能力由 <strong class="text-foreground">20~30 分钟缩短至约 15 秒</strong>。',
            '<strong class="text-foreground">AI Workflow</strong>：将研发排障流程抽象为标准 Workflow，沉淀 Debug 经验并构建 AI 辅助排障能力，产品运维投入由每周 <strong class="text-foreground">1.5-2 天降至 0.5-1 天</strong>，整体效率提升 <strong class="text-foreground">60%+</strong>。',
            '<strong class="text-foreground">Developer Productivity</strong>：推动平台 CLI 化，设计并上线 <strong class="text-foreground">106 个 CLI Command</strong>，将零件查询、试验报告上传等高频能力封装为研发工具，提高研发日常操作效率。',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Monica.ai" role="AI 工具产品经理（实习）" period="2023.11 — 2024.03">
          <p className="mb-3">负责海外 AI 浏览器插件产品的用户研究、产品分析及功能设计。</p>
          <BulletList items={[
            '负责用户调研的群体划分、线上访谈及访谈结果整理全流程。发放 <strong class="text-foreground">2 万份问卷</strong>，获得 <strong class="text-foreground">187 位活跃用户</strong>反馈；深访 <strong class="text-foreground">11 位海外用户</strong>，明确非付费用户核心诉求并确定首页快速引导策略。',
            '建立产品体验的数据分析指标和需求分析漏斗，推动语言翻译、快捷工具栏、PDF 阅读等功能优化。多项功能上线后，插件卸载率从 <strong class="text-foreground">36.47% 减少至 18.1%</strong>，次日留存率均值从 <strong class="text-foreground">7.25% 显著上升至 9.50%</strong>。',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Momenta" role="自动驾驶工具产品经理（实习）" period="2022.10 — 2023.05">
          <p className="mb-3">负责自动驾驶数据平台 Mviz 产品及工具平台建设。</p>
          <BulletList items={[
            '对接感知算法研发及仿真团队，分析用户行为及需求，提升了 Mviz 自定义配置能力、插件平台化能力、团队协作能力等，新增 <strong class="text-foreground">15+ 个功能</strong>，<strong class="text-foreground">1200+ 用户</strong>问题定位的效率提高 <strong class="text-foreground">10 倍</strong>（用户问题诊断时长从小时级降至 <strong class="text-foreground">0.4～0.6 min</strong>）。',
            '独立完成模拟数据可视化对比功能，显著降低用户操作难度，上线后成为 <strong class="text-foreground">500+ 下游用户</strong>仿真模拟场景下的常用功能。',
            '深度参与从 0 到 1 搭建权限管理系统、插件发版平台等，实现业务解耦，显著提升研发团队组织效能。发现内部团队操作原始数据报表的弊端，主动落地并搭建任务资源分配机制，保证数据安全性和隐私性，也保证了处理数据包时长基本低于 <strong class="text-foreground">10 min</strong>。',
          ]} />
        </ExperienceCard>
      </Section>

      <Section title="个人能力">
        <div className="flex flex-wrap gap-2">
          <SkillTag label="企业数字化平台" />
          <SkillTag label="SaaS 产品" />
          <SkillTag label="流程设计" />
          <SkillTag label="数据分析" />
          <SkillTag label="用户研究" />
          <SkillTag label="AI Agent" />
          <SkillTag label="Prompt Engineering" />
          <SkillTag label="Workflow Design" />
          <SkillTag label="Enterprise AI" />
        </div>
      </Section>

      <Section title="教育经历">
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">武汉理工大学</span>
              <span className="text-xs text-muted/60">2021 — 2024</span>
            </div>
            <p className="text-sm text-muted">信息与交互设计 硕士 · GPA 3.8/4.0</p>
            <p className="text-xs text-muted/60">核心领域：用户体验、服务设计、人机交互研究</p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">重庆大学</span>
              <span className="text-xs text-muted/60">2018 — 2019</span>
            </div>
            <p className="text-sm text-muted">计算机科学与技术 交换生 · 专业前 5%</p>
            <p className="text-xs text-muted/60">技术领域：数据结构、算法分析、计算机图像处理</p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-foreground">中南民族大学</span>
              <span className="text-xs text-muted/60">2017 — 2021</span>
            </div>
            <p className="text-sm text-muted">计算机科学与技术 学士 · 排名 4/158</p>
            <p className="text-xs text-muted/60">校三好学生 · 连续四年国家、校级奖学金</p>
          </div>
        </div>
      </Section>
    </>
  );
}
