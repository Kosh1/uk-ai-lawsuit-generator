export type LandingConfig = {
  title: string;
  subtitle: string;
  topText: string;
  placeholder: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  example: string;
};

export const defaultUKConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Need to make a legal claim?\nAI helps in 2 minutes!",
  subtitle: "Describe your situation in simple words. AI will analyze your rights, create a Letter Before Action or Claim Form and give you an action plan. Free and confidential.",
  topText: "⚖️ Any disputes, claims, rights protection — fast and professional!",
  placeholder: "For example: My neighbour flooded my flat and refuses to pay for damages. The flooding happened on 15th March, damage is estimated at £5,000. I want to send a Letter Before Action...",
  ctaTitle: "Don't delay protecting your rights!",
  ctaSubtitle: "The sooner you start — the faster you get results.",
  ctaButton: "Create legal document",
  example: `LETTER BEFORE ACTION

To: [Defendant's Name and Address]
From: [Your Name and Address]
Date: [Date]

Dear [Defendant's Name],

I am writing to you regarding [brief description of the issue]. 

[Detailed description of the facts, dates, and circumstances]

This constitutes a breach of [relevant law/contract terms]. 

I am seeking [specific remedy sought, e.g., payment of £X, performance of contract, etc.].

I propose to resolve this matter without court proceedings. Please respond within 14 days of receipt of this letter.

If I do not receive a satisfactory response within this time, I will have no alternative but to commence court proceedings against you.

Yours sincerely,
[Your Name]`,
  exampleImagesDir: "/examples/default"
};

export const familyConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Need help with family law?\nAI creates documents in 2 minutes!",
  subtitle: "Divorce, child arrangements, financial settlements - get professional legal documents quickly and confidentially.",
  topText: "👨‍👩‍👧‍👦 Professional family law assistance — fast, accurate, confidential!",
  placeholder: "For example: I want to divorce my spouse and arrange child contact. We have two children aged 8 and 12. I need help with the divorce petition and child arrangements order...",
  ctaTitle: "Get professional family law help",
  ctaSubtitle: "Don't navigate family law alone — get expert assistance.",
  ctaButton: "Create family law document",
  example: `DIVORCE PETITION

IN THE FAMILY COURT
[Court Name]

BETWEEN:
[Your Name] (Petitioner)
and
[Spouse's Name] (Respondent)

PETITION FOR DIVORCE

1. The Petitioner and Respondent were married on [date] at [location].

2. The marriage has broken down irretrievably and the Petitioner seeks a decree of divorce.

3. The ground for divorce is that the marriage has broken down irretrievably.

4. The Petitioner seeks:
   a) A decree of divorce
   b) An order for costs
   c) Such other relief as the court may deem just

DATED this [date]

[Your Signature]
[Your Name]`,
  exampleImagesDir: "/examples/family"
};

export const employmentConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Employment dispute?\nGet your rights back with AI!",
  subtitle: "Unfair dismissal, discrimination, unpaid wages - create professional legal documents in minutes.",
  topText: "💼 Protect your employment rights — fast and professional!",
  placeholder: "For example: I was unfairly dismissed from my job after 5 years. My employer didn't follow proper procedures and I believe it was because of my age. I want to make a claim to the employment tribunal...",
  ctaTitle: "Protect your employment rights",
  ctaSubtitle: "Don't let employers take advantage — fight for your rights.",
  ctaButton: "Create employment claim",
  example: `EMPLOYMENT TRIBUNAL CLAIM

CLAIMANT: [Your Name]
RESPONDENT: [Employer's Name]

CLAIM FOR UNFAIR DISMISSAL

1. The Claimant was employed by the Respondent from [start date] to [end date].

2. The Claimant was dismissed on [date] for the following reasons: [reasons].

3. The dismissal was unfair because:
   a) The Respondent failed to follow proper disciplinary procedures
   b) The reasons given were not sufficient to justify dismissal
   c) The dismissal was discriminatory

4. The Claimant seeks:
   a) Compensation for unfair dismissal
   b) Reinstatement or re-engagement
   c) Costs

DATED this [date]

[Your Signature]
[Your Name]`,
  exampleImagesDir: "/examples/employment"
};

export const contractConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Contract dispute?\nAI helps you win!",
  subtitle: "Breach of contract, unpaid invoices, service disputes - get professional legal documents quickly.",
  topText: "📋 Contract disputes resolved — fast and professional!",
  placeholder: "For example: I provided services worth £10,000 but the client refuses to pay. The contract was signed 3 months ago and all work was completed on time. I need to recover the money...",
  ctaTitle: "Resolve your contract dispute",
  ctaSubtitle: "Don't let clients get away with non-payment — take action.",
  ctaButton: "Create contract claim",
  example: `LETTER BEFORE ACTION

To: [Client's Name and Address]
From: [Your Name and Address]
Date: [Date]

Dear [Client's Name],

I am writing regarding the outstanding payment for services provided under our contract dated [date].

The contract provided for payment of £10,000 for [description of services], which were completed on [completion date].

Despite repeated requests, payment has not been received. This constitutes a breach of contract.

I demand payment of £10,000 within 14 days of receipt of this letter.

If payment is not received within this time, I will have no alternative but to commence court proceedings.

Yours sincerely,
[Your Name]`,
  exampleImagesDir: "/examples/contract"
};

export const debtConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Someone owes you money?\nGet it back with AI!",
  subtitle: "Personal loans, business debts, unpaid invoices - create professional debt recovery documents in minutes.",
  topText: "💰 Debt recovery made simple — fast and professional!",
  placeholder: "For example: My friend borrowed £5,000 from me 6 months ago and promised to pay back in 3 months. Now he's avoiding me and not responding to messages. I want to recover the money...",
  ctaTitle: "Recover your money",
  ctaSubtitle: "Don't let debtors get away — take legal action.",
  ctaButton: "Create debt recovery document",
  example: `LETTER BEFORE ACTION

To: [Debtor's Name and Address]
From: [Your Name and Address]
Date: [Date]

Dear [Debtor's Name],

I am writing regarding the outstanding debt of £5,000 owed to me.

On [date], you borrowed £5,000 from me with a promise to repay within 3 months. The loan was made in good faith and documented by [evidence].

Despite repeated requests, the debt remains unpaid. This is causing me financial hardship.

I demand payment of £5,000 within 14 days of receipt of this letter.

If payment is not received within this time, I will have no alternative but to commence court proceedings.

Yours sincerely,
[Your Name]`,
  exampleImagesDir: "/examples/debt"
};

export const propertyConfig: LandingConfig & { exampleImagesDir?: string } = {
  title: "Property dispute?\nAI helps you win!",
  subtitle: "Landlord-tenant disputes, property damage, boundary issues - get professional legal documents quickly.",
  topText: "🏠 Property disputes resolved — fast and professional!",
  placeholder: "For example: My tenant has caused £3,000 worth of damage to my property and refuses to pay for repairs. The tenancy agreement clearly states they are responsible for damage beyond normal wear and tear...",
  ctaTitle: "Resolve your property dispute",
  ctaSubtitle: "Protect your property rights — take legal action.",
  ctaButton: "Create property claim",
  example: `LETTER BEFORE ACTION

To: [Tenant's Name and Address]
From: [Your Name and Address]
Date: [Date]

Dear [Tenant's Name],

I am writing regarding the damage to my property at [address] caused during your tenancy.

The tenancy agreement dated [date] clearly states that you are responsible for any damage beyond normal wear and tear.

The damage includes [description of damage] with an estimated cost of £3,000 for repairs.

I demand payment of £3,000 for the damage within 14 days of receipt of this letter.

If payment is not received within this time, I will have no alternative but to commence court proceedings.

Yours sincerely,
[Your Name]`,
  exampleImagesDir: "/examples/property"
};
