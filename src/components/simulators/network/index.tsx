"use client";

import { ChoiceDrillRunner, OrderDrillRunner } from "@/components/simulators/SimulatorRegistry";
import { ACL_RULE_ORDER_POOL } from "@/content/simulators/drills/network/acl-rule-order";
import { BINARY_IP_POOL } from "@/content/simulators/drills/network/binary-ip-converter";
import { CABLE_TYPE_POOL } from "@/content/simulators/drills/network/cable-type";
import { DHCP_DORA_POOL } from "@/content/simulators/drills/network/dhcp-dora";
import { DNS_RECORD_POOL } from "@/content/simulators/drills/network/dns-record";
import { IPV6_COMPRESS_POOL } from "@/content/simulators/drills/network/ipv6-compress";
import { IP_RANGE_POOL } from "@/content/simulators/drills/network/ip-range";
import { NAT_TYPE_POOL } from "@/content/simulators/drills/network/nat-type";
import { STATIC_ROUTE_POOL } from "@/content/simulators/drills/network/static-route";
import { VLAN_TRUNK_POOL } from "@/content/simulators/drills/network/vlan-trunk";
import { WIRELESS_STANDARD_POOL } from "@/content/simulators/drills/network/wireless-standard";
import type { SimulatorComponentProps } from "@/content/simulators/registry";

export function VlanTrunkDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={VLAN_TRUNK_POOL} onComplete={onComplete} />;
}

export function NatTypeDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={NAT_TYPE_POOL} onComplete={onComplete} />;
}

export function StaticRouteDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={STATIC_ROUTE_POOL} onComplete={onComplete} />;
}

export function AclRuleOrderDrill({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={ACL_RULE_ORDER_POOL} onComplete={onComplete} />;
}

export function DhcpDoraDrill({ onComplete }: SimulatorComponentProps) {
  return <OrderDrillRunner pool={DHCP_DORA_POOL} onComplete={onComplete} />;
}

export function DnsRecordDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={DNS_RECORD_POOL} onComplete={onComplete} />;
}

export function WirelessStandardDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={WIRELESS_STANDARD_POOL} onComplete={onComplete} />;
}

export function CableTypeDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={CABLE_TYPE_POOL} onComplete={onComplete} />;
}

export function Ipv6CompressDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={IPV6_COMPRESS_POOL} onComplete={onComplete} />;
}

export function IpRangeDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={IP_RANGE_POOL} onComplete={onComplete} minItems={6} maxItems={8} />;
}

export function BinaryIpConverterDrill({ onComplete }: SimulatorComponentProps) {
  return <ChoiceDrillRunner pool={BINARY_IP_POOL} onComplete={onComplete} minItems={5} maxItems={7} />;
}
