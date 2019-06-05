/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUiConfArgs() { }
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.name;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.description;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.objType;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.width;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.height;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.htmlParams;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.swfUrl;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confFile;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confFileFeatures;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.config;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confVars;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.useCdn;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.tags;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.swfUrlVersion;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.creationMode;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.html5Url;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.partnerTags;
export class KalturaUiConf extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUiConf' },
            id: { type: 'n', readOnly: true },
            name: { type: 's' },
            description: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            objType: { type: 'en', subTypeConstructor: KalturaUiConfObjType, subType: 'KalturaUiConfObjType' },
            objTypeAsString: { type: 's', readOnly: true },
            width: { type: 'n' },
            height: { type: 'n' },
            htmlParams: { type: 's' },
            swfUrl: { type: 's' },
            confFilePath: { type: 's', readOnly: true },
            confFile: { type: 's' },
            confFileFeatures: { type: 's' },
            config: { type: 's' },
            confVars: { type: 's' },
            useCdn: { type: 'b' },
            tags: { type: 's' },
            swfUrlVersion: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            creationMode: { type: 'en', subTypeConstructor: KalturaUiConfCreationMode, subType: 'KalturaUiConfCreationMode' },
            html5Url: { type: 's' },
            version: { type: 's', readOnly: true },
            partnerTags: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUiConf.prototype.id;
    /** @type {?} */
    KalturaUiConf.prototype.name;
    /** @type {?} */
    KalturaUiConf.prototype.description;
    /** @type {?} */
    KalturaUiConf.prototype.partnerId;
    /** @type {?} */
    KalturaUiConf.prototype.objType;
    /** @type {?} */
    KalturaUiConf.prototype.objTypeAsString;
    /** @type {?} */
    KalturaUiConf.prototype.width;
    /** @type {?} */
    KalturaUiConf.prototype.height;
    /** @type {?} */
    KalturaUiConf.prototype.htmlParams;
    /** @type {?} */
    KalturaUiConf.prototype.swfUrl;
    /** @type {?} */
    KalturaUiConf.prototype.confFilePath;
    /** @type {?} */
    KalturaUiConf.prototype.confFile;
    /** @type {?} */
    KalturaUiConf.prototype.confFileFeatures;
    /** @type {?} */
    KalturaUiConf.prototype.config;
    /** @type {?} */
    KalturaUiConf.prototype.confVars;
    /** @type {?} */
    KalturaUiConf.prototype.useCdn;
    /** @type {?} */
    KalturaUiConf.prototype.tags;
    /** @type {?} */
    KalturaUiConf.prototype.swfUrlVersion;
    /** @type {?} */
    KalturaUiConf.prototype.createdAt;
    /** @type {?} */
    KalturaUiConf.prototype.updatedAt;
    /** @type {?} */
    KalturaUiConf.prototype.creationMode;
    /** @type {?} */
    KalturaUiConf.prototype.html5Url;
    /** @type {?} */
    KalturaUiConf.prototype.version;
    /** @type {?} */
    KalturaUiConf.prototype.partnerTags;
}
typesMappingStorage['KalturaUiConf'] = KalturaUiConf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVpQ29uZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVpQ29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJsRixNQUFNLG9CQUFxQixTQUFRLGlCQUFpQjs7OztJQTJCaEQsWUFBWSxJQUF5QjtRQUVqQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM5QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNySCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmZPYmpUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVWlDb25mT2JqVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlIH0gZnJvbSAnLi9LYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVWlDb25mQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdG9ialR5cGU/IDogS2FsdHVyYVVpQ29uZk9ialR5cGU7XG5cdHdpZHRoPyA6IG51bWJlcjtcblx0aGVpZ2h0PyA6IG51bWJlcjtcblx0aHRtbFBhcmFtcz8gOiBzdHJpbmc7XG5cdHN3ZlVybD8gOiBzdHJpbmc7XG5cdGNvbmZGaWxlPyA6IHN0cmluZztcblx0Y29uZkZpbGVGZWF0dXJlcz8gOiBzdHJpbmc7XG5cdGNvbmZpZz8gOiBzdHJpbmc7XG5cdGNvbmZWYXJzPyA6IHN0cmluZztcblx0dXNlQ2RuPyA6IGJvb2xlYW47XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRzd2ZVcmxWZXJzaW9uPyA6IHN0cmluZztcblx0Y3JlYXRpb25Nb2RlPyA6IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGU7XG5cdGh0bWw1VXJsPyA6IHN0cmluZztcblx0cGFydG5lclRhZ3M/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVWlDb25mIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG9ialR5cGUgOiBLYWx0dXJhVWlDb25mT2JqVHlwZTtcblx0cmVhZG9ubHkgb2JqVHlwZUFzU3RyaW5nIDogc3RyaW5nO1xuXHR3aWR0aCA6IG51bWJlcjtcblx0aGVpZ2h0IDogbnVtYmVyO1xuXHRodG1sUGFyYW1zIDogc3RyaW5nO1xuXHRzd2ZVcmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNvbmZGaWxlUGF0aCA6IHN0cmluZztcblx0Y29uZkZpbGUgOiBzdHJpbmc7XG5cdGNvbmZGaWxlRmVhdHVyZXMgOiBzdHJpbmc7XG5cdGNvbmZpZyA6IHN0cmluZztcblx0Y29uZlZhcnMgOiBzdHJpbmc7XG5cdHVzZUNkbiA6IGJvb2xlYW47XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHN3ZlVybFZlcnNpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdGNyZWF0aW9uTW9kZSA6IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGU7XG5cdGh0bWw1VXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogc3RyaW5nO1xuXHRwYXJ0bmVyVGFncyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVpQ29uZkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVWlDb25mJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0b2JqVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVaUNvbmZPYmpUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZPYmpUeXBlJyB9LFxuXHRcdFx0XHRvYmpUeXBlQXNTdHJpbmcgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoZWlnaHQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aHRtbFBhcmFtcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzd2ZVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29uZkZpbGVQYXRoIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y29uZkZpbGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29uZkZpbGVGZWF0dXJlcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb25maWcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29uZlZhcnMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlQ2RuIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3dmVXJsVmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGlvbk1vZGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mQ3JlYXRpb25Nb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUnIH0sXG5cdFx0XHRcdGh0bWw1VXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyVGFncyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVWlDb25mJ10gPSBLYWx0dXJhVWlDb25mOyJdfQ==