/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaNdnDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelLanguage;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelCopyright;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageTitle;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageUrl;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageLink;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.itemMediaRating;
export class KalturaNdnDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaNdnDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            channelLanguage: { type: 's' },
            channelCopyright: { type: 's' },
            channelImageTitle: { type: 's' },
            channelImageUrl: { type: 's' },
            channelImageLink: { type: 's' },
            itemMediaRating: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelLanguage;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelCopyright;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageTitle;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageUrl;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageLink;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.itemMediaRating;
}
typesMappingStorage['KalturaNdnDistributionProfile'] = KalturaNdnDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU5kbkRpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWU5SSxNQUFNLG9DQUFxQyxTQUFRLHNDQUFzQzs7OztJQWFyRixZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU5kbkRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgY2hhbm5lbFRpdGxlPyA6IHN0cmluZztcblx0Y2hhbm5lbExpbms/IDogc3RyaW5nO1xuXHRjaGFubmVsRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRjaGFubmVsTGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRjaGFubmVsQ29weXJpZ2h0PyA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVGl0bGU/IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VVcmw/IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VMaW5rPyA6IHN0cmluZztcblx0aXRlbU1lZGlhUmF0aW5nPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU5kbkRpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICByZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRjaGFubmVsVGl0bGUgOiBzdHJpbmc7XG5cdGNoYW5uZWxMaW5rIDogc3RyaW5nO1xuXHRjaGFubmVsRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGNoYW5uZWxMYW5ndWFnZSA6IHN0cmluZztcblx0Y2hhbm5lbENvcHlyaWdodCA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVGl0bGUgOiBzdHJpbmc7XG5cdGNoYW5uZWxJbWFnZVVybCA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlTGluayA6IHN0cmluZztcblx0aXRlbU1lZGlhUmF0aW5nIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTmRuRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTmRuRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNoYW5uZWxUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbExhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxDb3B5cmlnaHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlVGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxJbWFnZUxpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbU1lZGlhUmF0aW5nIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhTmRuRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=