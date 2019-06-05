/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaSchedulerWorker } from './KalturaSchedulerWorker';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSchedulerArgs() { }
/** @type {?|undefined} */
KalturaSchedulerArgs.prototype.configuredId;
/** @type {?|undefined} */
KalturaSchedulerArgs.prototype.name;
/** @type {?|undefined} */
KalturaSchedulerArgs.prototype.host;
export class KalturaScheduler extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.statuses === 'undefined')
            this.statuses = [];
        if (typeof this.configs === 'undefined')
            this.configs = [];
        if (typeof this.workers === 'undefined')
            this.workers = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduler' },
            id: { type: 'n', readOnly: true },
            configuredId: { type: 'n' },
            name: { type: 's' },
            host: { type: 's' },
            statuses: { type: 'a', readOnly: true, subTypeConstructor: KalturaSchedulerStatus, subType: 'KalturaSchedulerStatus' },
            configs: { type: 'a', readOnly: true, subTypeConstructor: KalturaSchedulerConfig, subType: 'KalturaSchedulerConfig' },
            workers: { type: 'a', readOnly: true, subTypeConstructor: KalturaSchedulerWorker, subType: 'KalturaSchedulerWorker' },
            createdAt: { type: 'd', readOnly: true },
            lastStatus: { type: 'n', readOnly: true },
            lastStatusStr: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduler.prototype.id;
    /** @type {?} */
    KalturaScheduler.prototype.configuredId;
    /** @type {?} */
    KalturaScheduler.prototype.name;
    /** @type {?} */
    KalturaScheduler.prototype.host;
    /** @type {?} */
    KalturaScheduler.prototype.statuses;
    /** @type {?} */
    KalturaScheduler.prototype.configs;
    /** @type {?} */
    KalturaScheduler.prototype.workers;
    /** @type {?} */
    KalturaScheduler.prototype.createdAt;
    /** @type {?} */
    KalturaScheduler.prototype.lastStatus;
    /** @type {?} */
    KalturaScheduler.prototype.lastStatusStr;
}
typesMappingStorage['KalturaScheduler'] = KalturaScheduler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7SUFhbkQsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUN4RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0gsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzFILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDNUMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQ3RDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlckNvbmZpZyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlckNvbmZpZyc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVyV29ya2VyIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVyV29ya2VyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGNvbmZpZ3VyZWRJZD8gOiBudW1iZXI7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRob3N0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRjb25maWd1cmVkSWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGhvc3QgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0YXR1c2VzIDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c1tdO1xuXHRyZWFkb25seSBjb25maWdzIDogS2FsdHVyYVNjaGVkdWxlckNvbmZpZ1tdO1xuXHRyZWFkb25seSB3b3JrZXJzIDogS2FsdHVyYVNjaGVkdWxlcldvcmtlcltdO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBsYXN0U3RhdHVzIDogbnVtYmVyO1xuXHRyZWFkb25seSBsYXN0U3RhdHVzU3RyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdHVzZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YXR1c2VzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3MgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNvbmZpZ3MgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMud29ya2VycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMud29ya2VycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZXInIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y29uZmlndXJlZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNlcyA6IHsgdHlwZSA6ICdhJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZXJTdGF0dXMnIH0sXG5cdFx0XHRcdGNvbmZpZ3MgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlckNvbmZpZywgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVyQ29uZmlnJyB9LFxuXHRcdFx0XHR3b3JrZXJzIDogeyB0eXBlIDogJ2EnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZXJXb3JrZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlcldvcmtlcicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGFzdFN0YXR1cyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxhc3RTdGF0dXNTdHIgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVyJ10gPSBLYWx0dXJhU2NoZWR1bGVyOyJdfQ==