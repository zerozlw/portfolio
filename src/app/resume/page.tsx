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
          2 years of product management experience with background in AI products, enterprise digital platforms, and automotive R&D. Led Xiaomi EV&apos;s Parts R&D Platform (DV, EA, TKO). Continuously exploring LLM applications — built AI Agent, knowledge base, NL query, CLI capabilities, achieving <strong className="text-foreground">60%+ efficiency improvement</strong> and <strong className="text-foreground">100x+ query speedup</strong>. Strong technical aptitude with hands-on SQL, Python, and AI prototyping.
        </p>
      </Section>

      <Section title="Experience">
        <ExperienceCard company="Xiaomi EV" role="Product Manager (Platform & AI)" period="2024.06 — Present">
          <p className="mb-3">Leading supplier digitization, parts R&D platform, and AI Agent development.</p>

          <p className="mb-1 font-medium text-foreground text-xs uppercase tracking-wider">Enterprise Platform</p>
          <BulletList items={[
            'Built standardized R&D template system covering <strong class="text-foreground">200+ part categories</strong> and <strong class="text-foreground">95% of common scenarios</strong>',
            'Redesigned test verification lifecycle — processing time from <strong class="text-foreground">15 days → 3 days</strong>',
            'Engineering approval automation supporting <strong class="text-foreground">5 vehicle models</strong> and <strong class="text-foreground">360 approvals</strong>',
            'Supplier collaboration platform supporting <strong class="text-foreground">350 suppliers</strong> online',
          ]} />

          <p className="mb-1 mt-4 font-medium text-foreground text-xs uppercase tracking-wider">AI Agent</p>
          <BulletList items={[
            '<strong class="text-foreground">AI Agent</strong>: System debug, knowledge Q&A, DB query, data analysis — integrated into Feishu bot. Query time: <strong class="text-foreground">20-30 min → 15 sec</strong>',
            '<strong class="text-foreground">AI Workflow</strong>: Standardized troubleshooting workflow. Maintenance: <strong class="text-foreground">1.5-2 days/week → 0.5-1 day/week</strong>, efficiency <strong class="text-foreground">60%+</strong>',
            '<strong class="text-foreground">CLI</strong>: <strong class="text-foreground">106 commands</strong> — part query, test reports, high-frequency operations packaged as dev tools',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Monica.ai" role="AI Tool PM (Intern)" period="2023.11 — 2024.03">
          <p className="mb-2">User research, product analysis, and feature design for overseas AI browser extension.</p>
          <BulletList items={[
            'Led full-cycle research: <strong class="text-foreground">20K surveys</strong>, <strong class="text-foreground">187 responses</strong>, <strong class="text-foreground">11 deep interviews</strong>',
            'Built analytics funnel — uninstall rate <strong class="text-foreground">36.47% → 18.1%</strong>, next-day retention <strong class="text-foreground">7.25% → 9.50%</strong>',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Momenta" role="Autonomous Driving Tool PM (Intern)" period="2022.10 — 2023.05">
          <p className="mb-2">Data platform Mviz and tool platform for autonomous driving.</p>
          <BulletList items={[
            'Delivered <strong class="text-foreground">15+ features</strong>, diagnosis time from <strong class="text-foreground">hour-level → 0.4-0.6 min</strong> for <strong class="text-foreground">1,200+ users</strong>',
            'Built permission system and plugin platform from scratch, data processing under <strong class="text-foreground">10 min</strong>',
          ]} />
        </ExperienceCard>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          <SkillTag label="AI Agent" />
          <SkillTag label="Prompt Engineering" />
          <SkillTag label="Workflow Design" />
          <SkillTag label="Enterprise AI" />
          <SkillTag label="Product Strategy" />
          <SkillTag label="User Research" />
          <SkillTag label="Data Analysis" />
          <SkillTag label="SQL / Python" />
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">Wuhan Univ. of Technology</span>
            <span className="text-xs text-muted/60">2021 — 2024</span>
          </div>
          <p className="text-sm text-muted">M.S. Information & Interaction Design · GPA 3.8/4.0</p>

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">Chongqing University</span>
            <span className="text-xs text-muted/60">2018 — 2019</span>
          </div>
          <p className="text-sm text-muted">Exchange Student (CS) · Top 5%</p>

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">Central South Univ. for Nationalities</span>
            <span className="text-xs text-muted/60">2017 — 2021</span>
          </div>
          <p className="text-sm text-muted">B.S. Computer Science · Rank 4/158</p>
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
          2 年产品经理经验，拥有 AI 产品、企业数字化平台及汽车研发业务背景。负责小米汽车零部件研发平台（DV、EA、TKO）建设。持续探索 LLM 在企业效率场景中的落地，主导 AI Agent、知识库、数据库自然语言查询、CLI 等能力建设，实现<strong className="text-foreground">研发运维效率提升 60%+</strong>、<strong className="text-foreground">复杂数据查询效率提升 100 倍以上</strong>。具备较强技术理解能力，可独立完成 SQL、Python 验证及 AI Demo 搭建。
        </p>
      </Section>

      <Section title="工作经历">
        <ExperienceCard company="小米汽车" role="产品经理（平台 & AI）" period="2024.06 — 至今">
          <p className="mb-3">负责供应商数字化、零部件研发数字化平台及 AI Agent 建设。</p>

          <p className="mb-1 font-medium text-foreground text-xs uppercase tracking-wider">企业平台建设</p>
          <BulletList items={[
            '标准化研发模板体系，覆盖 <strong class="text-foreground">200+ 类零件</strong>、<strong class="text-foreground">95% 常见研发场景</strong>',
            '测试验证文件全生命周期重构，处理周期 <strong class="text-foreground">15 天 → 3 天</strong>',
            '工程认可自动化，支撑 <strong class="text-foreground">5 款车型</strong>、<strong class="text-foreground">360 次工程认可</strong>',
            '供应商协同机制，支撑 <strong class="text-foreground">350 家供应商</strong>在线协作',
          ]} />

          <p className="mb-1 mt-4 font-medium text-foreground text-xs uppercase tracking-wider">AI Agent 建设</p>
          <BulletList items={[
            '<strong class="text-foreground">AI Agent</strong>：系统 Debug、知识问答、数据库查询、数据分析，接入飞书机器人。查询效率 <strong class="text-foreground">20~30 分钟 → 约 15 秒</strong>',
            '<strong class="text-foreground">AI Workflow</strong>：标准化排障流程，运维投入 <strong class="text-foreground">1.5-2 天/周 → 0.5-1 天/周</strong>，效率提升 <strong class="text-foreground">60%+</strong>',
            '<strong class="text-foreground">CLI</strong>：上线 <strong class="text-foreground">106 个命令</strong>，封装零件查询、试验报告上传等高频能力',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Monica.ai" role="AI 工具产品经理（实习）" period="2023.11 — 2024.03">
          <p className="mb-2">海外 AI 浏览器插件产品的用户研究、产品分析及功能设计。</p>
          <BulletList items={[
            '全流程用户调研：<strong class="text-foreground">2 万份问卷</strong>、<strong class="text-foreground">187 位活跃用户</strong>、<strong class="text-foreground">11 位深访</strong>',
            '卸载率 <strong class="text-foreground">36.47% → 18.1%</strong>，次日留存 <strong class="text-foreground">7.25% → 9.50%</strong>',
          ]} />
        </ExperienceCard>

        <ExperienceCard company="Momenta" role="自动驾驶工具产品经理（实习）" period="2022.10 — 2023.05">
          <p className="mb-2">自动驾驶数据平台 Mviz 及工具平台建设。</p>
          <BulletList items={[
            '新增 <strong class="text-foreground">15+ 功能</strong>，诊断时长 <strong class="text-foreground">小时级 → 0.4~0.6 min</strong>，覆盖 <strong class="text-foreground">1200+ 用户</strong>',
            '从 0 到 1 搭建权限系统和插件平台，数据处理时长低于 <strong class="text-foreground">10 min</strong>',
          ]} />
        </ExperienceCard>
      </Section>

      <Section title="个人能力">
        <div className="flex flex-wrap gap-2">
          <SkillTag label="AI Agent" />
          <SkillTag label="Prompt Engineering" />
          <SkillTag label="Workflow Design" />
          <SkillTag label="Enterprise AI" />
          <SkillTag label="产品策略" />
          <SkillTag label="用户研究" />
          <SkillTag label="数据分析" />
          <SkillTag label="SQL / Python" />
        </div>
      </Section>

      <Section title="教育经历">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">武汉理工大学</span>
            <span className="text-xs text-muted/60">2021 — 2024</span>
          </div>
          <p className="text-sm text-muted">信息与交互设计 硕士 · GPA 3.8/4.0</p>

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">重庆大学</span>
            <span className="text-xs text-muted/60">2018 — 2019</span>
          </div>
          <p className="text-sm text-muted">计算机科学与技术 交换生 · 专业前 5%</p>

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">中南民族大学</span>
            <span className="text-xs text-muted/60">2017 — 2021</span>
          </div>
          <p className="text-sm text-muted">计算机科学与技术 学士 · 排名 4/158</p>
        </div>
      </Section>
    </>
  );
}
