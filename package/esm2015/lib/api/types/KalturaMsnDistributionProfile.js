/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaMsnDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.domain;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.csId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.source;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.sourceFriendlyName;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.pageGroup;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.sourceFlavorParamsId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.wmvFlavorParamsId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.flvFlavorParamsId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.slFlavorParamsId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.slHdFlavorParamsId;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.msnvideoCat;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.msnvideoTop;
/** @type {?|undefined} */
KalturaMsnDistributionProfileArgs.prototype.msnvideoTopCat;
export class KalturaMsnDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaMsnDistributionProfile' },
            username: { type: 's' },
            password: { type: 's' },
            domain: { type: 's' },
            csId: { type: 's' },
            source: { type: 's' },
            sourceFriendlyName: { type: 's' },
            pageGroup: { type: 's' },
            sourceFlavorParamsId: { type: 'n' },
            wmvFlavorParamsId: { type: 'n' },
            flvFlavorParamsId: { type: 'n' },
            slFlavorParamsId: { type: 'n' },
            slHdFlavorParamsId: { type: 'n' },
            msnvideoCat: { type: 's' },
            msnvideoTop: { type: 's' },
            msnvideoTopCat: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.domain;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.csId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.source;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.sourceFriendlyName;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.pageGroup;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.sourceFlavorParamsId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.wmvFlavorParamsId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.flvFlavorParamsId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.slFlavorParamsId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.slHdFlavorParamsId;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.msnvideoCat;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.msnvideoTop;
    /** @type {?} */
    KalturaMsnDistributionProfile.prototype.msnvideoTopCat;
}
typesMappingStorage['KalturaMsnDistributionProfile'] = KalturaMsnDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1zbkRpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNc25EaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCOUksTUFBTSxvQ0FBcUMsU0FBUSxzQ0FBc0M7Ozs7SUFrQnJGLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1zbkRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgdXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdGRvbWFpbj8gOiBzdHJpbmc7XG5cdGNzSWQ/IDogc3RyaW5nO1xuXHRzb3VyY2U/IDogc3RyaW5nO1xuXHRzb3VyY2VGcmllbmRseU5hbWU/IDogc3RyaW5nO1xuXHRwYWdlR3JvdXA/IDogc3RyaW5nO1xuXHRzb3VyY2VGbGF2b3JQYXJhbXNJZD8gOiBudW1iZXI7XG5cdHdtdkZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0Zmx2Rmxhdm9yUGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRzbEZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0c2xIZEZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0bXNudmlkZW9DYXQ/IDogc3RyaW5nO1xuXHRtc252aWRlb1RvcD8gOiBzdHJpbmc7XG5cdG1zbnZpZGVvVG9wQ2F0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1zbkRpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICB1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGRvbWFpbiA6IHN0cmluZztcblx0Y3NJZCA6IHN0cmluZztcblx0c291cmNlIDogc3RyaW5nO1xuXHRzb3VyY2VGcmllbmRseU5hbWUgOiBzdHJpbmc7XG5cdHBhZ2VHcm91cCA6IHN0cmluZztcblx0c291cmNlRmxhdm9yUGFyYW1zSWQgOiBudW1iZXI7XG5cdHdtdkZsYXZvclBhcmFtc0lkIDogbnVtYmVyO1xuXHRmbHZGbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblx0c2xGbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblx0c2xIZEZsYXZvclBhcmFtc0lkIDogbnVtYmVyO1xuXHRtc252aWRlb0NhdCA6IHN0cmluZztcblx0bXNudmlkZW9Ub3AgOiBzdHJpbmc7XG5cdG1zbnZpZGVvVG9wQ2F0IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTXNuRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTXNuRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZG9tYWluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNzSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZUZyaWVuZGx5TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYWdlR3JvdXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlRmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d212Rmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmx2Rmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2xGbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzbEhkRmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bXNudmlkZW9DYXQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bXNudmlkZW9Ub3AgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bXNudmlkZW9Ub3BDYXQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1zbkRpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFNc25EaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==