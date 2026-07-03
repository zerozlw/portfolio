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
          <div className="mb-16 max-w-[42rem]">
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
          <div className="mx-auto max-w-[42rem] prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted prose-li:text-muted prose-strong:text-foreground">

            {locale === "en" ? <EnContent /> : <ZhContent />}

          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

function EnContent() {
  return (
    <>
      {/* Summary */}
      <h2>Summary</h2>
      <p>
        2 years of product management experience with background in AI products, enterprise digital platforms, and automotive R&D. Led the development of Xiaomi EV&apos;s Parts R&D Platform (DV, EA, TKO), covering R&D, test verification, and supplier collaboration. Continuously exploring LLM applications in enterprise efficiency — built AI Agent, knowledge base, NL query, CLI and other capabilities, achieving <strong>60%+ efficiency improvement in R&D operations</strong> and <strong>100x+ speedup in complex data queries</strong>. Strong technical aptitude with hands-on SQL, Python, and AI prototyping skills.
      </p>

      {/* Work Experience */}
      <h2>Experience</h2>

      <h3>Xiaomi EV — Product Manager (Platform & AI)</h3>
      <p className="text-sm text-muted">2024.06 — Present</p>
      <p>Leading supplier digitization, parts R&D platform, and AI Agent development, serving R&D, test verification, and supplier teams.</p>

      <p><strong>Enterprise Platform — R&D Process Optimization</strong></p>
      <ul>
        <li>Built standardized R&D template system, abstracting expert knowledge into platform rules, covering <strong>200+ part categories</strong> and <strong>95% of common R&D scenarios</strong>.</li>
        <li>Redesigned test verification document lifecycle (create → approve → archive), reducing processing time from <strong>15 days to 3 days</strong>.</li>
        <li>Built engineering approval automation, integrating external system data, supporting <strong>5 vehicle models</strong> and <strong>360 engineering approvals</strong>.</li>
        <li>Established standardized R&D-supplier collaboration, supporting <strong>350 suppliers</strong> online.</li>
      </ul>

      <p><strong>AI Agent Development</strong></p>
      <ul>
        <li><strong>AI Agent</strong>: Designed and launched IDP Agent — system debug, knowledge Q&A, DB query, data analysis. Integrated into Feishu bot for team-wide use. Data query time reduced from <strong>20-30 min to ~15 sec</strong>.</li>
        <li><strong>AI Workflow</strong>: Abstracted R&D troubleshooting into standardized workflow. Product maintenance reduced from <strong>1.5-2 days/week to 0.5-1 day/week</strong>, overall efficiency <strong>60%+</strong>.</li>
        <li><strong>Developer Productivity</strong>: Designed and shipped <strong>106 CLI commands</strong>, packaging high-frequency capabilities (part query, test report upload) as developer tools.</li>
      </ul>

      <h3>Monica.ai — AI Tool Product Manager (Intern)</h3>
      <p className="text-sm text-muted">2023.11 — 2024.03</p>
      <p>User research, product analysis, and feature design for an overseas AI browser extension.</p>
      <ul>
        <li>Led full-cycle user research: <strong>20,000 surveys</strong>, <strong>187 active user responses</strong>, <strong>11 deep interviews</strong>. Identified core non-paying user needs and defined onboarding strategy.</li>
        <li>Built product analytics funnel, driving optimizations in language translation, quick toolbar, and PDF reader. Result: uninstall rate dropped from <strong>36.47% to 18.1%</strong>, next-day retention rose from <strong>7.25% to 9.50%</strong>.</li>
      </ul>

      <h3>Momenta — Autonomous Driving Tool PM (Intern)</h3>
      <p className="text-sm text-muted">2022.10 — 2023.05</p>
      <p>Product manager for autonomous driving data platform Mviz and tool platform.</p>
      <ul>
        <li>Delivered <strong>15+ features</strong> for perception algorithm and simulation teams. User issue diagnosis time reduced from <strong>hour-level to 0.4-0.6 min</strong> for <strong>1,200+ users</strong>.</li>
        <li>Built permission management system and plugin release platform from scratch, enabling business decoupling.</li>
        <li>Designed task resource allocation mechanism, ensuring data package processing under <strong>10 min</strong>.</li>
      </ul>

      {/* Skills */}
      <h2>Skills</h2>
      <p><strong>Product:</strong> Enterprise Digital Platform · SaaS · Process Design · Data Analysis · User Research</p>
      <p><strong>AI:</strong> AI Agent · Prompt Engineering · Workflow Design · Enterprise AI · LLM Applications</p>

      {/* Education */}
      <h2>Education</h2>
      <ul>
        <li><strong>Wuhan University of Technology</strong> — M.S. Information & Interaction Design, 2021-2024, GPA 3.8/4.0</li>
        <li><strong>Chongqing University</strong> — Exchange Student (CS), 2018-2019, Top 5%</li>
        <li><strong>Central South University for Nationalities</strong> — B.S. Computer Science, 2017-2021, Rank 4/158</li>
      </ul>
    </>
  );
}

function ZhContent() {
  return (
    <>
      {/* Summary */}
      <h2>个人简介</h2>
      <p>
        2 年产品经理经验，拥有 AI 产品、企业数字化平台及汽车研发业务背景。负责小米汽车零部件研发平台（DV、EA、TKO）建设，覆盖研发、测试验证及供应商协同等业务场景。持续探索 LLM 在企业效率场景中的落地，主导 AI Agent、知识库、数据库自然语言查询、CLI 等能力建设，实现<strong>研发运维效率提升 60%+</strong>、<strong>复杂数据查询效率提升 100 倍以上</strong>。具备较强技术理解能力，可独立完成 SQL、Python 验证及 AI Demo 搭建。
      </p>

      {/* Work Experience */}
      <h2>工作经历</h2>

      <h3>小米汽车 — 产品经理（平台 & AI）</h3>
      <p className="text-sm text-muted">2024.06 — 至今</p>
      <p>负责供应商数字化、零部件研发数字化平台及 AI Agent 建设，服务研发、测试验证、供应商等业务，推动研发流程数字化与 AI 智能化。</p>

      <p><strong>企业平台建设，研发流程效率优化</strong></p>
      <ul>
        <li>建设标准化研发模板体系，将专家经验抽象为平台规则，覆盖 <strong>200+ 类零件</strong>、<strong>95% 常见研发场景</strong>，提高跨项目经验复用效率。</li>
        <li>重构测试验证文件全生命周期流程，覆盖创建、审批、归档等核心环节，处理周期由 <strong>15 天缩短至 3 天</strong>。</li>
        <li>建设工程认可自动化能力，打通外部系统数据，累计支撑 <strong>5 款车型</strong>、<strong>360 次工程认可</strong>，降低跨团队沟通成本。</li>
        <li>建立研发与供应商标准化协同机制，支撑 <strong>350 家供应商</strong>在线协作，提高数据流转效率及合规性。</li>
      </ul>

      <p><strong>AI Agent 建设</strong></p>
      <ul>
        <li><strong>AI Agent</strong>：主导设计并上线 IDP Agent，围绕系统 Debug、知识问答、数据库查询、数据分析等高频场景设计 AI 能力，并接入飞书机器人，实现团队共享使用，其中查询能力由 <strong>20~30 分钟缩短至约 15 秒</strong>。</li>
        <li><strong>AI Workflow</strong>：将研发排障流程抽象为标准 Workflow，沉淀 Debug 经验并构建 AI 辅助排障能力，产品运维投入由每周 <strong>1.5-2 天降至 0.5-1 天</strong>，整体效率提升 <strong>60%+</strong>。</li>
        <li><strong>Developer Productivity</strong>：推动平台 CLI 化，设计并上线 <strong>106 个 CLI Command</strong>，将零件查询、试验报告上传等高频能力封装为研发工具，提高研发日常操作效率。</li>
      </ul>

      <h3>Monica.ai — AI 工具产品经理（实习）</h3>
      <p className="text-sm text-muted">2023.11 — 2024.03</p>
      <p>负责海外 AI 浏览器插件产品的用户研究、产品分析及功能设计。</p>
      <ul>
        <li>负责用户调研的群体划分、线上访谈及访谈结果整理全流程。发放 <strong>2 万份问卷</strong>，获得 <strong>187 位活跃用户</strong>反馈；深访 <strong>11 位海外用户</strong>，明确非付费用户核心诉求并确定首页快速引导策略。</li>
        <li>建立产品体验的数据分析指标和需求分析漏斗，推动语言翻译、快捷工具栏、PDF 阅读等功能优化。插件卸载率从 <strong>36.47% 减少至 18.1%</strong>，次日留存率从 <strong>7.25% 上升至 9.50%</strong>。</li>
      </ul>

      <h3>Momenta — 自动驾驶工具产品经理（实习）</h3>
      <p className="text-sm text-muted">2022.10 — 2023.05</p>
      <p>负责自动驾驶数据平台 Mviz 产品及工具平台建设。</p>
      <ul>
        <li>对接感知算法研发及仿真团队，新增 <strong>15+ 个功能</strong>，<strong>1200+ 用户</strong>问题定位效率提高 <strong>10 倍</strong>（诊断时长从小时级降至 <strong>0.4~0.6 min</strong>）。</li>
        <li>独立完成模拟数据可视化对比功能，上线后成为 <strong>500+ 下游用户</strong>仿真模拟场景下的常用功能。</li>
        <li>深度参与从 0 到 1 搭建权限管理系统、插件发版平台，实现业务解耦，保证数据处理时长低于 <strong>10 min</strong>。</li>
      </ul>

      {/* Skills */}
      <h2>个人能力</h2>
      <p><strong>产品力：</strong>企业数字化平台 · SaaS 产品 · 流程设计 · 数据分析 · 用户研究</p>
      <p><strong>AI Product：</strong>AI Agent · Prompt Engineering · Workflow Design · Enterprise AI</p>

      {/* Education */}
      <h2>教育经历</h2>
      <ul>
        <li><strong>武汉理工大学</strong> — 信息与交互设计 硕士，2021-2024，GPA 3.8/4.0</li>
        <li><strong>重庆大学</strong> — 计算机科学与技术 交换生，2018-2019，专业前 5%</li>
        <li><strong>中南民族大学</strong> — 计算机科学与技术 学士，2017-2021，排名 4/158</li>
      </ul>
    </>
  );
}
